package io.rafflethor.raffle.twitter

/**
 * Repository to get raffles of twitter nature
 *
 * @since 0.1.0
 */
interface TwitterRepository {

    static final List<String> FIELDS = ['id', 'name', 'noWinners', 'hashTag', 'until', 'since']

    /**
     * Lists all twitter raffles
     *
     * @param max maximum number of results
     * @param offset the offset of the result
     * @since 0.1.0
     */
    List<TwitterRaffle> listAll(Integer max, Integer offset)

    /**
     * Finds a given {@link TwitterRaffle} by its id
     *
     * @param id the identifier of the raffle
     * @since 0.1.0
     */
    TwitterRaffle findById(UUID id)

    /**
     * Saves all raffles passed as parameters in one batch
     *
     * @param raffles the list of raffles to be saved
     * @since 0.1.0
     */
    void saveBatch(List<TwitterRaffle> raffles)
}
