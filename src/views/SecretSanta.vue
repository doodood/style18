<template>
    <div>
        <v-parallax src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg" height="300">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            
            <h1 class="white--text mb-2 display-1 text-xs-center amber--text"></h1>
            <div class="subheading mb-3 text-xs-center amber--text" ></div>           
            <span class="subheading">
                Balancez vos idées ici !!!
              </span>
          </v-layout>
        </v-parallax>
        <section>
          <v-layout>
            <v-flex xs10 offset-xs1 offset-sm1  sm10 md10 offset-md1>
              <div>
                <v-form @submit.prevent="onCreateIdea">
                  <v-text-field label="Idée cadeau*"
                                v-model="title"></v-text-field>
                                <v-text-field label="Lien vers le site web"
                                v-model="link"></v-text-field>
                                <v-text-field label="Prix"
                                v-model="price"></v-text-field>
                  <v-btn color="red darken-1" 
                  raised
                  class="white--text" 
                  @click="dialog = false"
                  :disabled="!formValid"
                  type="submit">Ajouter</v-btn>
                </v-form>
              </div>
            </v-flex>
          </v-layout>
        </section>

        <section>
            <v-layout>
              <v-flex md12 xs12>
                <v-data-table
                :items="loadIdeas"
                class="elevation-1"
                hide-actions
                hide-headers
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-right">{{ props.item.title }}</td>
                  <td class="text-xs-right"> clique <a :href="props.item.link" target="_blank">ici </a></td>
                  <td class="text-xs-right">{{ props.item.price }} $</td>
                  <!-- <td class="text-xs-right">{{ props.item.protein }}</td>
                  <td class="text-xs-right">{{ props.item.iron }}</td> -->
                </template>
              </v-data-table>
              </v-flex>
              
            </v-layout>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
        title: '',
        price: 0,
        link: '',
    }
  },
  computed : {
      formValid () {
          return this.title !== '' 
      },
      ...mapGetters([
            'loadIdeas'
            ])
  },
  methods: {
    onCreateIdea() {
      const idea = {
        title: this.title,
        price: this.price,
        link: this.link
      }
      this.$store.dispatch('createIdea',idea)
  }
}
}
</script>
<style scoped>

</style>
