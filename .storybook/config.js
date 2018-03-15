import { configure } from '@storybook/vue'

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import BootstrapVue from 'bootstrap-vue';

// include styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(BootstrapVue);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
