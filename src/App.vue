<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      temporary
    >
  <v-toolbar color="red accent-4" class="white--text">
    <v-toolbar-title 
        class="white--text"> {{title}}
      </v-toolbar-title>
    </v-toolbar>
    <v-img :aspect-ratio="16/9" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp0Cjf2ZGaqJa7UJ_FrDOHd2SLGFCaL_pwRCng50NFBQ-7Jfp"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.2)"
            >
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">Ho ho ho</div>
            <div class="body-1">Xmas est dans la place</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-spacer></v-spacer>
        <v-list-tile @click="signOut()" v-if="this.userIsAuthenticated" color="red accent-4">
          <v-list-tile-action color="purple">
            <v-icon color="red accent-4">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Déconnexion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="red darken-1"  class="white--text">
      <v-toolbar-side-icon  @click="drawer = !drawer"  class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title>X-Mas Party</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="white--text">Link One</v-btn>
      <v-btn flat class="white--text">Link Two</v-btn>
      <v-btn flat class="white--text">Link Three</v-btn>
      <v-btn flat class="yellow--text"  v-if="this.userIsAuthenticated" @click="signOut()">
          <v-icon left dark>exit_to_app</v-icon>
          Sign out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <div id="app">
      <!--<div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/sign-in">Sign in</router-link> |
        <router-link to="/sign-up">Sign up</router-link>
      </div>-->
      <router-view/>
    </div>
  </v-app> 
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Accueil', to: '/' },
          { icon: 'restaurant_menu', title: 'Repas', to: '/repas' },
          { icon: 'games', title: 'Jeux de société', to: '/jeux-de-scoiete' },
          { icon: 'card_giftcard', title: 'Secret Santa', to: '/secret-santa' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'X-Mas Menu'
      }
    },
    computed : {
    ...mapGetters([
      'user'
    ]),
    userIsAuthenticated () {
      return this.user !== null && this.user !== undefined
    }
  },
  watch: {
      user (value) {
        if (value == null || value == undefined) {
          this.$router.push('/sign-in')
        }
      }
    },
  methods : {
    ...mapMutations(['setUser']),
    ...mapActions([
      'setDrawer',
      'signUserOut'
    ]),
    signOut : function () {
      this.signUserOut().then(()=>alert('Vous êtes déco'))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
