import { createStore } from 'vuex'

export default createStore({
  state: {
    isAddClicked: false
  },
  mutations: {
    setAddClicked(state, value) {
      state.isAddClicked = value
    }
  },
  actions: {
    toggleAddClicked({ commit }, value) {
      commit('setAddClicked', value)
    }
  },
  getters: {
    isAddClicked: state => state.isAddClicked
  }
})
