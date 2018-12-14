<template>
    <div id="game">
        <section>
        <v-parallax src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg" height="300">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            
            <h1 class="white--text mb-2 display-1 text-xs-center amber--text"></h1>
            <div class="subheading mb-3 text-xs-center amber--text" ></div>
            <v-btn
              class="red lighten-2 mt-5"
              dark
              large
              
            >
             Jeux de société
             
            </v-btn>
            <span class="subheading">
                Pour les alliances, trahisons et autres coups bas, c'est ici...
              </span>
          </v-layout>
        </v-parallax>
      </section>
    <section>
       <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="red" dark>
           Ajouter
          <v-icon dark right>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </section>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                dialog: false
            }
        }
    }
</script>