import Vue from 'vue'
import Vuex from 'vuex'
import * as Storage from '../util/storage'
import * as types from './type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    direction: 'forward',
    user: Storage.get('tokenUser') || {},
    userBasicInfo: Storage.get('userBasicInfo') || {}
  },
  getters: {
  },
  mutations: {
    [types.UPDATE_DIRECTION](state, payload) {
      state.direction = payload.direction
    },
    [types.TOKEN_USER_INFO](state, info) {
      state.user = info
      Storage.set('tokenUser', info)
    },
    [types.GET_USER_BASIC_INFO](state, info) {
      state.userBasicInfo = info
      Storage.set('userBasicInfo', info)
    }
  },
  actions: {
    setUser({commit}, info) {
      commit(types.TOKEN_USER_INFO, info)
    },
    getUserBasicInfo({commit}, info) {
      commit(types.GET_USER_BASIC_INFO, info)
    }
  }
})

export default store
