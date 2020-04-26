const state = {
    id: ''
}

const getters = {
    getId: state => {
        return state.id;
    },
}
const actions = {
    actionsGetId: ({ commit }) => {
        commit('actionsGetId')
    },

}

const mutations = {
    actionsGetId(state, id) {
        return state.id = id;
    },
}

export default {
    state, getters, mutations, actions
}