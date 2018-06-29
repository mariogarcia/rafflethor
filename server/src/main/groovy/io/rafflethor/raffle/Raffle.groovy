package io.rafflethor.raffle

import groovy.transform.CompileStatic

/**
 * Base class for all raffles
 *
 * @since 0.1.0
 */
@CompileStatic
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
	
	Optional d
}
