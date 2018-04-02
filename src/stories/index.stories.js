/* eslint-disable react/react-in-jsx-scope */
import Vuex from 'vuex';

import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import ButtonBar from '../components/ButtonBar.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
    .addDecorator(centered)
    .add('with text', () => ({
        components: { MyButton },
        template: '<my-button @click="action">Hello Button</my-button>',
        methods: { action: action('clicked') },
    }))
    // .add('with JSX', () => ({
    //     components: { MyButton },
    //     render() {
    //         return <my-button onClick={this.action}>With JSX</my-button>;
    //     },
    //     methods: { action: linkTo('clicked') },
    // }))
    .add('with some emoji', () => ({
        components: { MyButton },
        template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
        methods: { action: action('clicked') },
    }))
    .add('Button Bar', () => ({
        components: { ButtonBar },
        template: '<button-bar :fighter="1"></button-bar>',
        store: new Vuex.Store({
            state: {
                fighterData: [{ id: 1 }, { id: 2 }],
                selectedFighter: {},
            },
            actions: {
                selectFighter({ commit }, payload) {
                    console.log('Selecting fighter');
                    commit('SELECT_FIGHTER', payload);
                },
                deleteFighter({ commit }, payload) {
                    console.log('Deleting fighter');
                    commit('DELETE_FIGHTER', payload);
                },
            },
            mutations: {
                SELECT_FIGHTER(state, fighterId) {
                    console.log('Selected Fighter');
                    state.selectedFighter = state.fighterData.filter(fighter => fighter.id === fighterId)[0];
                    action('vuex state')(state);
                },
                DELETE_FIGHTER(state, fighterId) {
                    state.fighterData = state.fighterData.filter(fighter => fighter.id !== fighterId);
                    action('vuex state')(state);
                },
            },
        }),
        methods: {
            editFighter() {
                this.$store.dispatch({
                    type: 'selectFighter',
                    id: this.fighter,
                });
            },
            removeFighter() {
                this.$store.dispatch({
                   type: 'deleteFighter',
                   id: this.fighter,
                });
            },
        },
    }));

/* eslint-enable react/react-in-jsx-scope */
