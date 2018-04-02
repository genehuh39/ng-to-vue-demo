/* eslint-disable react/react-in-jsx-scope */
import Vuex from 'vuex';

import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered';
import { mapActions, mapGetters } from 'vuex'

import Dashboard from '../components/Dashboard.vue';
import FighterForm from '../components/FighterForm.vue';
import ItemGrid from '../components/ItemGrid.vue';
import mutations from '../store/mutations.js';
import getters from '../store/getters.js';
import JsonData from './data/fighters.json';

storiesOf('Widget', module)
    .addDecorator(centered)
    .add('Dashboard', () => ({
        components: { Dashboard },
        template: '<dashboard></dashboard>',
        store: new Vuex.Store({
            state: {
                fighterData: [{ id: 1 }, { id: 2 }]
            },
            getters
        }),
    }))
    .add('Fighter Form', () => ({
        components: { FighterForm },
        template: '<fighter-form></fighter-form>',
        methods: {
            ...mapActions(['updateFighter', 'addFighter'])
        },
        computed: {
            ...mapGetters(['weightClasses', 'selectedFighter']),
            formData() {
                return { ...this.selectedFighter }
            }
        },
        store: new Vuex.Store({
            state: {
                fighterData: [{ id: 1 }, { id: 2 }],
                weightClasses: JsonData.weightClasses,
                selectedFighter: { id: 1 }
            },
            actions: {
                addFighter(context, payload) {
                    payload.id = context.state.fighterData.length + 1
                    context.commit('ADD_FIGHTER', payload)
                },
                updateFighter({ commit }, payload) {
                    commit('UPDATE_FIGHTER', payload)
                },
                selectFighter({ commit }, payload) {
                    console.log('Selecting fighter')
                    commit('SELECT_FIGHTER', payload)
                }
            },
            mutations,
            getters
        }),
    }))
    .add('Item Grid', () => ({
        components: { ItemGrid },
        template: '<item-grid></item-grid>',
        store: new Vuex.Store({
            state: {
                selectedFighter: { id: 1 },
                weightClasses: JsonData.weightClasses,
                fighterData: JsonData.fighterData
            },
            actions: {
                addFighter (context, payload) {
                    payload.id = context.state.fighterData.length + 1
                    context.commit('ADD_FIGHTER', payload)
                },
                updateFighter ({commit}, payload) {
                    commit('UPDATE_FIGHTER', payload)
                },
                selectFighter ({commit}, payload) {
                    console.log('Selecting fighter')
                    commit('SELECT_FIGHTER', payload)
                },
                deleteFighter ({commit}, payload) {
                    commit('DELETE_FIGHTER', payload)
                },
                clearFighter ({commit}) {
                    console.log('Clearing selected fighter')
                    commit('CLEAR_FIGHTER')
                }
            },
            mutations,
            getters
        })
    }))


/* eslint-enable react/react-in-jsx-scope */