package io.rafflethor.config

class Config {

    static class Database {
        String url
        String username
        String password
    }


    static class Twitter {
        String consumerKey
        String consumerSecret
        String accessToken
        String accessTokenSecret
    }

    Database database

    Twitter twitter
}
