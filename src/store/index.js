import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/Todo';
import id from './modules/id';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        todos,
        id
    }
});
