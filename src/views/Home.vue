<template>
<v-content>
      <section>
        <v-parallax src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="https://vignette.wikia.nocookie.net/simpsons/images/6/64/Santa_Homer_Tapped_Out.png/revision/latest?cb=20150813230931" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center amber--text"></h1>
            <div class="subheading mb-3 text-xs-center amber--text" ></div>
            <v-btn
              class="red lighten-2 mt-5"
              dark
              large
              @click="signIn()" 
               v-if="!this.userIsAuthenticated"
            >
             Connexion
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Récap</h2>
              <span class="subheading">
                Histoire que personne n'oublie et que ça soit bien organisé hein...
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--darken-4">restaurant_menu</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Repas</div>
                    </v-card-title>
                    <v-card-text>
                      Concept de base : Que chacun ramène son <span class="font-weight-bold">  plat "spécial" </span>, sa boisson fétiche, son gâteau sûr !!.<br>
                      Une seule reègle... Chaque élément amené doit être unique, j'entends par là que personne ne doit venir avec le même plat qu'une autre personne.
                      +1 pour les plats régionaux bien entendu.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--darken-4">games</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Jeux de société</div>
                    </v-card-title>
                    <v-card-text>
                      <span class="font-weight-bold">Monopoly</span> ? <span class="font-weight-bold">Blanc manger coco</span> ? <span class="font-weight-bold">Risk</span> ? <span class="font-weight-bold">Code Names</span> ? <span class="font-weight-bold">Loup Garou</span> ?
                      Quels seront les jeux qui <span class="font-weight-bold">briseront des amitiés, créeront  des alliances, ou seront à l'origines des plus gros trahisons de cette fin d'année... </span>
                      Libre à vous de suggérer d'autres jeux afin que tout le monde y trouve son compte.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--darken-4">card_giftcard</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Secret Santa</div>
                    </v-card-title>
                    <v-card-text>
                      Fin d'année obligé, nous (quand je dis nous je veux dire moi ahaha) en place un <span class="font-weight-bold">"secret santa"</span>.
                      Le principe étant le suivant, chaque personne se verra attribuer une personne à qui elle devra <span class="font-weight-bold">offrir un cadeau</span> d'une <span  class="font-weight-bold">valeur maximal de 15 euros </span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Let's get ready to rumble !!!</div>
            <em>Panthéon des tricheurs part II</em>
            <v-btn
              class="red lighten-2 mt-5"
              dark
              large
              @click="signIn()" 
               v-if="!this.userIsAuthenticated"
            >
              Connexion
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </v-content>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
  },
  computed : {
    ...mapGetters([
      'user'
    ]),
    userIsAuthenticated () {
      return this.user !== null && this.user !== undefined
    }
  },
  methods : {
    signIn : function () {
      this.$router.push('/sign-in')
    }
  },
  watch: {
      user (value) {
        if (value == null || value == undefined) {
          this.$router.push('/sign-in')
        }
      }
    }
}
</script>
