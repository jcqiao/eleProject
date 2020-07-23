import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_LOCATION,
  SET_ADDRESS
}

const state = {
  location: {},
  address: ""
}

const getters = {
  location: state => state.location,
  address: state => state.address
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
