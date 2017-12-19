import axios from 'axios'

export default {
    async fetchFighters({ commit }) {
        const fighters = await axios.get('/api/fighter')
        commit('LOAD_FIGHTERS', fighters.data)
    },
    async addFighter(context, payload) {
        payload.id = context.state.fighterData.length + 1
        await axios.post('/api/fighter', payload)
        context.commit('ADD_FIGHTER', payload)
    },
    async updateFighter({ commit }, payload) {
        await axios.put(`/api/fighter/${payload.id}`, payload)
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
