package io.rafflethor.db

import javax.inject.Inject
import javax.inject.Provider
import javax.sql.DataSource

import io.rafflethor.config.Config
import org.h2.jdbcx.JdbcDataSource

class DataSourceProvider implements Provider<DataSource> {

    @Inject
    Config config

    @Override
    DataSource get() {
        return new JdbcDataSource(
            URL: config.database.url,
            user: config.database.username,
            password: config.database.password
        )
    }
}
