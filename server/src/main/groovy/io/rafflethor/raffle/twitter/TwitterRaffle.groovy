package io.rafflethor.raffle.twitter

import io.rafflethor.raffle.Raffle

/**
 * A Raffle that uses a Twitter hashTag to filter winners
 *
 * @since 0.1.0
 */
class TwitterRaffle extends Raffle {

    /**
     * The hashTag to filter winners
     *
     * @since 0.1.0
     */
    String hashTag

    /**
     * From the moment a given tweet is valid
     *
     * @since 0.1.0
     */
    Date since

    /**
     * The moment a given tweet will no longer be valid
     *
     * @since 0.1.0
     */
    Date until
}
