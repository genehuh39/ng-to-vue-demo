import fighters from './mock.json'

export default {
    async fetchFighters({ commit }) {
        await setTimeout(() => {
            console.log('Fetching fighter data')
        }, 500)
        commit('LOAD_FIGHTERS', fighters.data)
    },
    async addFighter(context, payload) {
        payload.id = context.state.fighterData.length + 1
        await setTimeout(() => {
            console.log('Adding fighter')
        }, 500)
        context.commit('ADD_FIGHTER', payload)
    },
    async updateFighter({ commit }, payload) {
        await setTimeout(() => {
            console.log('Updating fighter record')
        }, 500)
        commit('UPDATE_FIGHTER', payload)
    },
    async deleteFighter({ commit }, payload) {
        await setTimeout(() => {
            console.log('Deleting fighter')
        }, 500)
        commit('DELETE_FIGHTER', payload)
    },
    clearFighter({ commit }) {
        console.log('Clearing selected fighter')
        commit('CLEAR_FIGHTER')
    },
    selectFighter({ commit }, payload) {
        console.log('Selecting fighter')
        commit('SELECT_FIGHTER', payload)
    }
}
