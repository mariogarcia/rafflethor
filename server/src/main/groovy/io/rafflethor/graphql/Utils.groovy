package io.rafflethor.graphql

import graphql.TypeResolutionEnvironment
import graphql.schema.TypeResolver

class Utils {

    static TypeResolver raffleTypeResolver() {
        return { TypeResolutionEnvironment env ->
            Object raffle = env.getObject()

            return env.schema.getObjectType(raffle.getClass().simpleName)

        } as TypeResolver
    }
}
