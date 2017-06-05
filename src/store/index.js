import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fighterData: [],
        weightClasses: ['Heavy', '205', '185', '170', '155', '145', '135', '125', '115'],
        selectedFighter: {}
    },
    actions,
    mutations,
    getters
})

