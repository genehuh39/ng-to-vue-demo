import Vue from 'vue'
import Vuex from 'vuex'
import FighterForm from 'src/components/FighterForm.vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'

Vue.use(Vuex)

describe('FighterForm.vue', () => {
    let store
    let actions
    beforeEach(() => {
        actions = {
            updateFighter: sinon.stub(),
            addFighter: sinon.stub()
        }
        store = new Vuex.Store({
            state: {},
            actions,
            mutations: {},
            getters: {}
        })
    })
    it('should create a true Vue.js component', () => {
        const wrapper = mount(FighterForm, { store })
        expect(wrapper.isVueComponent).to.equal(true)
    })
})
