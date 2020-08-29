import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    total: 0,
    input: null
  },
  getters: {
    getCartList: state => {
      return state.cartList
    },
    getTotal: state => {
      return state.total
    },
    getIput: state => {
      return state.input
    }
  },
  mutations: {
    SetCartList: (state,cartList)=>{
      state.cartList = cartList
    },
    SetTotal: (state,total)=>{
      state.total = total
    },
    SetInput: (state,input)=>{
      state.input = input
    }
  },
  actions: {
    // SetCartList: ({commit,state},cartList)=>{
    //   return commit('SetCartList',cartList)
    // },
    // SetTotal: ({commit,state},total)=>{
    //   return commit('SetTotal',total)
    // }
  },
  modules: {
  }
})
