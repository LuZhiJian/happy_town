import Vue from 'vue'
import Vuex from 'vuex'
// import * as Storage from '../util/storage'
import * as types from './type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    direction: 'forward',
  },
  getters: {
  },
  mutations: {
    [types.UPDATE_DIRECTION](state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
  }
})

export default store
