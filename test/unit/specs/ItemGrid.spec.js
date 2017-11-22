import Vue from 'vue'
import Vuex from 'vuex'
import ItemGrid from 'src/components/ItemGrid'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'

Vue.use(Vuex)

describe('ItemGrid.vue', () => {
    let store
    let actions
    beforeEach(() => {
        actions = {
            clearFighter: sinon.stub()
        }
        store = new Vuex.Store({
            state: {},
            actions,
            mutations: {},
            getters: {}
        })
    })
    it('calls store action clearFighter() when add button is clicked', () => {
        const wrapper = mount(ItemGrid, { store })
        wrapper.find('#add-fighter')[0].trigger('click')
        expect(actions.clearFighter.calledOnce).to.equal(true)
    })
})
