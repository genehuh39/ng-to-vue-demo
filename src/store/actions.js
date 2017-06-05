import fighters from './mock.json'

export default {
    fetchFighters({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('LOAD_FIGHTERS', fighters.data)
                resolve(fighters.data)
            }, 10)
        })
    },
    addFighter(context, payload) {
        payload.id = context.state.fighterData.length + 1
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('ADD_FIGHTER', payload)
                resolve()
            }, 10)
        })
    },
    updateFighter({ commit }, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('UPDATE_FIGHTER', payload)
                resolve()
            }, 10)
        })
    },
    deleteFighter({ commit }, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('DELETE_FIGHTER', payload)
                resolve()
            }, 10)
        })
    }
}
