import Vue from 'vue'
import Vuex from 'vuex'
import * as Storage from '../util/storage'
import * as types from './type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    direction: 'forward',
    userBasicInfo: Storage.get('userBasicInfo') || {}
  },
  getters: {
  },
  mutations: {
    [types.UPDATE_DIRECTION](state, payload) {
      state.direction = payload.direction
    },
    [types.GET_USER_BASIC_INFO](state, info) {
      state.userBasicInfo = info
      Storage.set('userBasicInfo', info)
    }
  },
  actions: {
    getUserBasicInfo({commit}, info) {
      commit(types.GET_USER_BASIC_INFO, info)
    }
  }
})

export default store
