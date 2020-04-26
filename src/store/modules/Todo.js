const state = {
    listJob: [
        {
            NameJob: 'reactJs',
            wage: 100,
            programmingLanguage: 'Html',
            YearsOfExperience: 10,
            RecruitmentCompany: 'FPT',
            describe: "mô tả FPT",
            _id: 1
        },
        {
            NameJob: 'Vue Js',
            wage: 2,
            programmingLanguage: 'Css',
            YearsOfExperience: 100,
            RecruitmentCompany: 'Google',
            describe: "mô tả Google ",
            _id: 2
        },
        {
            NameJob: 'Angular JS',
            wage: 89,
            programmingLanguage: 'Java Script',
            YearsOfExperience: 190,
            RecruitmentCompany: 'Facebook',
            describe: "mô tả Facebook",
            _id: 3
        },
        {
            NameJob: 'Node Js',
            wage: 2,
            programmingLanguage: 'Node Js avander',
            YearsOfExperience: 100,
            RecruitmentCompany: 'Microsoft',
            describe: "mô tả Microsoft ",
            _id: 4
        }
    ]
}

const getters = {
    allListJob: state => {
        return state.listJob;
    },
}
const actions = {
    EditItemJob: ({ commit }) => {
        commit('EditItemJob')
    },
    NewItemJob: ({ commit }) => {
        commit('NewItemJob')
    },
    DeleteItemJob: ({ commit }) => {
        commit('DeleteItemJob')
    },
}


const mutations = {
    EditItemJob(state,payload) {
        let rs = null;
        state.listJob.forEach((element, index) => {
            if (element._id === payload._id) {
                rs = index
            }
        });
        return state.listJob[rs] = payload
    },
    NewItemJob(state, todo) {
        return state.listJob.push(todo)
    },
    DeleteItemJob(state, id) {
        let rs = null;
        state.listJob.forEach((element, index) => {
            if (element._id === id) {
                rs = index
            }
        });
        return state.listJob.splice(rs, 1);
    }
}

export default {
    state, getters, mutations, actions
}