#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER rafflethor;
    CREATE DATABASE rafflethor;
    GRANT ALL PRIVILEGES ON DATABASE rafflethor TO rafflethor;
EOSQL
