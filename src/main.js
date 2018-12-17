import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import firebase from './firebase'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase,
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch('autoSignIn',user)
      }
    })
    this.$store.dispatch('loadDishes')
    this.$store.dispatch('loadGames')
    this.$store.dispatch('loadIdeas')
  }
}).$mount('#app')

