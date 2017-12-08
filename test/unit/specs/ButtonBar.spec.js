import Vue from 'vue'
import Vuex from 'vuex'
import ButtonBar from 'src/components/ButtonBar.vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'

Vue.use(Vuex)

describe('ButtonBar.vue', () => {
    let store, actions
    beforeEach(() => {
        actions = {
            selectFighter: sinon.stub(),
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
    it('calls store action selectFighter() when the edit button is clicked', () => {
        const wrapper = mount(ButtonBar, { store })
        wrapper.find('button')[0].trigger('click')
        expect(actions.selectFighter.calledOnce).to.equal(true)
    })
    it('calls store action deleteFighter() when delete button is clicked', () => {
        const wrapper = mount(ButtonBar, { store })
        wrapper.find('button')[1].trigger('click')
        expect(actions.deleteFighter.calledOnce).to.equal(true)
    })
})
