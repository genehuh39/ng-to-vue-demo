import Vue from 'vue'
import Vuex from 'vuex'
import ButtonBar from 'src/components/ButtonBar.vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'

Vue.use(Vuex)

describe('ButtonBar.vue', () => {
    let store
    let actions
    beforeEach(() => {
        actions = {
            editFighter: sinon.stub(),
            deleteFighter: sinon.stub()
        }
        store = new Vuex.Store({
            state: {},
            actions,
            mutations: {},
            getters: {}
        })
    })
    it('should create a true Vue.js component', () => {
        const wrapper = mount(ButtonBar, { store })
        expect(wrapper.isVueComponent).to.equal(true)
    })
})
