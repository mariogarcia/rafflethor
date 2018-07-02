package io.rafflethor.event

import javax.inject.Inject
import groovy.sql.GroovyRowResult
import groovy.sql.Sql

class EventRepositoryImpl implements EventRepository {

    static final List<String> FIELDS = ['id', 'name', 'description']

    @Inject
    Sql sql

    @Override
    List<Event> listAll(Integer max, Integer offset) {
        return sql
            .rows('SELECT * FROM events', offset, max)
            .collect(this.&toEvent)
    }

    private Event toEvent(GroovyRowResult result) {
        println "=============>$result"
        return new Event(result.subMap(FIELDS))
    }
}
