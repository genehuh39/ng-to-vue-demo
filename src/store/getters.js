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
    fighterById: state => (id) => {
        return state.fighterData.filter(fighter => fighter.id === id)[0]
    },
    /**
     * selectedFighter
     *  Keeps track of the fighter to be selected for editing
     * @param state
     * @returns {Object}
     */
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
     * convertedFighters
     *  Adds a fighter score for every fighter, before returning an array containing all fighters
     * @returns {Array}
     */
    convertedFighters: state => {
        return state.fighterData.map((fighter) => {
            const total = fighter.groundGame + fighter.rangeStriking + fighter.boxing + fighter.wrestling + fighter.clinch || 0
            fighter.fighterQuotient = (total / 5).toFixed(2)
            return fighter
        })
    }
}
