import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: ''

  },
  getters: {
    getUserName(state) {
        return state.userName
    }
  },
  mutations: {
    saveName(state, userName) {
        state.userName = userName;
    }
    
  },
  actions: {
    addName(contex, userName) {
        contex.commit('saveName', userName)
    }
  }
})