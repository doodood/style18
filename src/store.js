import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    loading: false,
    error: null
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error,
    drawer: state => state.drawer
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
   },
  setLoading(state,payload){
  	state.loading = payload
  },
  setError(state,payload){
  	state.error = payload
  },
  clearError(state){
  	state.error = null
  },
  setDrawer(state){
    state.drawer = !state.drawer
  }
  },
  actions: {
    signUserUp ({commit},payload) {
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then(user=>{
        commit('setLoading',false)
        const newUser = {
          id : user.uid,
          email:user.email,
          isLogged : true
        }
        commit('setUser',newUser)
      }).catch(error =>{
        commit('setLoading', false)
          commit('setError', error)
          console.log(error)
      })
  
    },
    autoSignIn ({commit},payload){
      commit('setUser',{id: payload.uid})
    },
    signUserIn ({commit},payload){
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then(user=>{
        console.log('USER INFO ',user)
        commit('setLoading',false)
        const newUser = {
          id : user.uid,
          email:user.email,
          isLogged : true
        }
        commit('setUser',newUser)
      }).catch(error =>{
        commit('setLoading',false)
        commit('setError',error)
        console.log(error)
  
      })
    },
    signUserOut ({commit}){
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().signOut()
        commit('setUser', null)
  
    },
    clearError ({commit}){
      commit('clearError')
    },
    setDrawer ({commit}){
      commit('setDrawer')
    },
    createDish ({commit}, payload){
      const dish = {
        title : payload.title,
        imageUrl : payload.imageUrl,
        description : payload.description,
        author : payload.author
      }
      firebase.database().ref('dishes').push(dish).then(
        (data) => {
          console.log(data)
          commit('createDIsh',dish)
        }
      ).catch((err) => {
        console.log(err)
      })
      
    }
  }
})