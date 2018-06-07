package io.rafflethor.raffle

/**
 * Base class for all raffles
 *
 * @since 0.1.0
 */
abstract class Raffle {
    /**
     * Raffle identifier
     *
     * @since 0.1.0
     */
    UUID id

    /**
     * The name of the raffle
     *
     * @since 0.1.0
     */
    String name

    /**
     * How many winners will this raffle have
     *
     * @since 0.1.0
     */
    Integer noWinners
}
