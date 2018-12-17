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
      <v-form @submit.prevent="onAddGame">
        <v-card>
          <v-card-title>
            <span class="headline">Proposition de jeu ?</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="Nom du jeu*" 
                                required
                                v-model="name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-btn raised block
                        color="red"
                        class="white--text"
                        @click="pickImage">
                              Ajouter une image
                  </v-btn>
                  <input type="file" 
                          style="display: none" 
                          ref="fileInput" 
                          accept="image/*"
                          @change="onFilePicked($event.target.files)">
                  <v-img v-if="imageUrl !== null" 
                          :src="imageUrl" 
                          height="200px"></v-img>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="Qui Ramène le jeu ?*"
                                v-model="owner"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-select
                    :items="['Rapide', 'Bof', 'Peut vite devenir chiante...', 'Ne termine jamais','Normale']"
                    label="Logueur des parties*"
                    required
                    v-model="duration"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*Champ obligatoire</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="dialog = false">Fermer</v-btn>
            <v-btn color="red darken-1" 
                  flat 
                  @click="dialog = false"
                  :disabled="!formValid"
                  type="submit">Ajouter</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    </section>
    <section>
      <v-flex xs12 sm4 v-for="g in loadGames" 
                        :key="g.name" 
                        class="mb-4  mt-2 text-center mx-auto" 
                        color="red darken-2">
        <v-card>
          <v-img v-if="g.imageUrl" 
              :src="g.imageUrl"
               aspect-ratio="2.75">
          </v-img>
          <v-img v-else
          src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg"
          aspect-ratio="2.75"
          >
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{g.name}}</h3>
              <div>Qui ramène: {{g.owner}}</div>
              <div>Durée d'une partie : {{g.duration}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

    export default {
        data () {
            return {
                dialog: false,
                imageUrl: null,
                owner: '',
                duration: '',
                name: '',
                image: null,
                img:null,
            }
        },
        
        computed : {
          ...mapGetters([
            'loadGames'
            ]),
          formValid () {
                return this.owner !== '' &&
                       this.longeur !== '' &&
                       this.name !== ''
            },
            
        },
        methods : {
          pickImage() {
                this.$refs.fileInput.click()
            },
            onFilePicked(files) {
                this.image = files[0]
                const fileReader = new FileReader()
                fileReader.addEventListener('load',(e) => {
                    this.img = e.target.result
                    this.imageUrl = this.img
                })
                fileReader.readAsDataURL(this.image);
            },
            onAddGame() {
                const game = {
                    owner : this.owner,
                    duration : this.duration,
                    name : this.name,
                    image : this.image
                }
                this.$store.dispatch('addGame',game)
                return this.$swal({
                       type: 'success',
                       title: 'Merci',
                       text: 'Let the massacre begin'
                   }).then( () => {
                       this.dialog = false
                   })
            }
        }
    }
</script>