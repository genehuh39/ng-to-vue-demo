export default {
    LOAD_FIGHTERS(state, payload) {
        state.fighterData = payload
    },
    ADD_FIGHTER(state, payload) {
        state.fighterData = [...state.fighterData, payload]
    },
    UPDATE_FIGHTER(state, payload) {
        state.fighterData = state.fighterData.map(fighter => {
            if (fighter.id === payload.id) {
                return payload
            } else {
                return fighter
            }
        })
    },
    DELETE_FIGHTER(state, fighterId) {
        state.fighterData = state.fighterData.filter(fighter => fighter.id !== fighterId)
    },
    SELECT_FIGHTER(state, fighterId) {
        state.selectedFighter = state.fighterData.filter(fighter => fighter.id === fighterId)[0]
    },
    CLEAR_FIGHTER(state) {
        state.selectedFighter = {}
    }
}
