package io.rafflethor.raffle.twitter

import javax.inject.Inject
import java.sql.Timestamp
import groovy.sql.BatchingStatementWrapper
import groovy.sql.GroovyRowResult
import groovy.sql.Sql

/**
 * Repository to get raffles of twitter nature
 *
 * @since 0.1.0
 */
class TwitterRepositoryImpl implements TwitterRepository {

    @Inject
    Sql sql

    @Override
    List<TwitterRaffle> listAll(Integer max, Integer offset) {
        return sql
            .rows("select * from twitter_raffles", offset, max)
            .collect(this.&toRaffle)
    }

    @Override
    TwitterRaffle findById(UUID id) {
        return sql
            .rows("select * from twitter_raffles where id = :id", id: id)
            .collect(this.&toRaffle)
            .find()
    }

    @Override
    void saveBatch(List<TwitterRaffle> raffles) {
        sql.withBatch(10) { BatchingStatementWrapper stmt ->
            raffles.each { TwitterRaffle raffle ->
                stmt.addBatch(buildTwitterRaffleQuery(raffle))
            }
        }
    }

    private static String buildTwitterRaffleQuery(TwitterRaffle raffle) {
        String since = raffle.since.format('yyyy-MM-dd hh:mm:ss')
        String until = raffle.until.format('yyyy-MM-dd hh:mm:ss')

        return """
          INSERT INTO twitter_raffles (id, name, noWinners, hashTag, since, until) 
          VALUES (
          '${raffle.id}', '${raffle.name}', ${raffle.noWinners}, '${raffle.hashTag}', '${since}', '${until}'
          )
        """
    }

    private static TwitterRaffle toRaffle(GroovyRowResult row) {
        return new TwitterRaffle(row.subMap(FIELDS))
    }
}
