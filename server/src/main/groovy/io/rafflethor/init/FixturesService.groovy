package io.rafflethor.init

import javax.inject.Inject
import groovy.sql.Sql

import io.rafflethor.raffle.twitter.TwitterRaffle
import io.rafflethor.raffle.twitter.TwitterRepository
import ratpack.service.Service
import ratpack.service.StartEvent

/**
 * Loads sample data to database
 *
 * @since 0.1.0
 */
class FixturesService implements Service {

    @Inject
    Sql sql

    @Inject
    TwitterRepository twitterRepository

    @Override
    void onStart(StartEvent event) throws Exception {
        sql.execute('''
           CREATE TABLE twitter_raffles (
             id UUID, 
             name VARCHAR(255), 
             noWinners INT, 
             hashTag VARCHAR(255),
             since TIMESTAMP,
             until TIMESTAMP
           )
        ''')

        twitterRepository.saveBatch(loadTwitterRaffles())
    }

    private static List<TwitterRaffle> loadTwitterRaffles() {
        return ClassLoader
            .getSystemResource('data/twitter_raffles.csv')
            .readLines()
            .drop(1)
            .collect(this.&toTwitterRaffle)
    }

    private static TwitterRaffle toTwitterRaffle(String line) {
        String[] columns = line.split(',')

        return new TwitterRaffle(
            id: UUID.fromString(columns[0]),
            name: columns[1],
            noWinners: columns[2] as Integer,
            hashTag: columns[3],
            since: Date.parse('yyyy/MM/dd', columns[4]),
            until: Date.parse('yyyy/MM/dd', columns[5])
        )
    }
}
