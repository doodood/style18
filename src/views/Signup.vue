<template lang="html">
<div class="">
  <v-container>
        <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
          src="https://picsum.photos/300/300/?random"
          aspect-ratio="2.75"
        ></v-img>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="u.email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <!-- <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="u.password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout> -->
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading"  color="amber darken-1" :loading="loading">
                      Recevoir mail d'inscription
                       <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                    </v-btn>
                    <br/>
                    <v-btn flat to="/sign-in">
                      Retour
                    </v-btn> 
                  </v-flex>
                  
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
   </v-container> 
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name : 'sign-up',
  computed : {
    ...mapGetters([
      'loading',
      'error',
    ])
  },
  data () {
    return {
      u:{
        email : '',
      }
    }
  },
  methods: {
    ...mapActions([
      'sendPasswordResetEmail'
    ]),
    onSignup: function () {
      this.sendPasswordResetEmail(this.u).then(()=>{
        console.log('bye')
      })
    }
  }
}
</script>

<style lang="css">
</style>
