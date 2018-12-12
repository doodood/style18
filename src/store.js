import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    loading: false,
    error: null,
    loadedDishes : []
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error,
    drawer: state => state.drawer,
    loadDishes: state => state.loadedDishes
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
  },
  setLoadedDished (state, payload) {
    state.loadedDishes = payload
  },
  createDish (state, payload) {
    state.loadedDishes.push(payload)
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
        
        const newUser = {
          id : user.uid,
          email:user.email,
          isLogged : true
        }
        commit('setUser',newUser)
        commit('setLoading',false)
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
    loadDishes ({commit}) {
      firebase.database().ref('dishes').once('value')
      .then((data) => {
        const dishes = []
        const obj = data.val()
        for (let key in obj) {
          dishes.push({
            id : key,
            title : obj[key].title,
            imageUrl : obj[key].imageUrl,
            description : obj[key].description,
            author : obj[key].author
          })
        }
        commit ('setLoadedDished',dishes)
      })
      .catch( (err) => {
        console.log(err)
      })
    }, 
    createDish ({commit}, payload){
      const dish = {
        title : payload.title,
        description : payload.description,
        author : payload.by
      }
      let key
      let imageUrl
      firebase.database().ref('dishes').push(dish).then(
        (data) => {
           key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('dishes/' + key+ext).put(payload.image)
        }
      )
      .then(fileData => {
          let imagePath = fileData.metadata.fullPath
          return firebase.storage().ref().child(imagePath).getDownloadURL()
            .then(url => {
              imageUrl = url
              return firebase.database().ref('dishes/').child(key).update({imageUrl: imageUrl})
            })
        })﻿
      .then( () => {
        commit('createDish',
          {
            ...dish,
            imageUrl: imageUrl,
            id : key})
      })
      .catch((err) => {
        console.log(err)
      })
      
    }
  }
})