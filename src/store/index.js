import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const demoname = {
    fn: 'fn',
}
const store = new Vuex.Store({
    state: {
        demo: '名字'
    },
    getters: {
        getLocale: state => {
            return state.demo + 321
        }
    },
    mutations: {
        [demoname.fn]: (state, localeVal) => {
            console.log('被执行了', localeVal)
        }
    },
    actions: {
        demoactions: ({commit}, localeVal) => {
            commit(demoname.fn, localeVal)
        }
    }
})

export default store;