export default {
    /**
     * fighters
     *  Returns an array of fighters
     * @returns {Array}
     */
    fighters: state => state.fighterData,
    /**
     * fighterById
     *  Retrieves a fighter by fighter ID
     * @param id
     * @returns {Object}
     */
    fighterById: (state, getters) => (id) => {
        return state.fighterData.filter(fighter => fighter.id === id)[0]
    },
    selectedFighter: state => {
        return state.selectedFighter
    },
    /**
     * fighterCount
     *  Returns number of fighters
     *  @returns {Number}
     */
    fighterCount: state => {
        return state.fighterData.length
    },
    /**
     * weightClasses
     *  Returns an array of fighter weight classes
     * @returns {Array}
     */
    weightClasses: state => {
        return state.weightClasses
    },
    /**
     * calculateFighterQuotients
     *  Compute the fighter scores for every fighter
     * @param state
     * @returns {Array}
     */
    calculateFighterQuotients: state => (fighterData) => {
        return state.fighterData.map((fighter) => {
            const total = fighter.groundGame + fighter.rangeStriking + fighter.boxing + fighter.wrestling + fighter.clinch || 0
            fighter.fighterQuotient = (total / 5).toFixed(2)
            return fighter
        })
    }
}
