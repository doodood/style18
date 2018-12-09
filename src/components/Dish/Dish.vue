<template>

    <v-container>
        <v-btn flat round to="/" left>
            Retour
        </v-btn>
        <br>
        <v-btn  raised  round color="amber darken-4 white--text text-darken-4" right  to="/repas/nouveau">
            <v-icon color="white lighten-2">add</v-icon>
            Ajouter un plat
            <v-icon color="white lighten-2">add</v-icon>
        </v-btn>
        <v-layout row wrap>
            <v-flex xs12 md8 sm10 offset-md2 offset-sm1>
                <v-card v-for="d in loadDishes" :key="d.title" class="mb-4 white--text" color="red darken-2">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <v-img v-if="d.imageUrl" 
                                        :src="d.imageUrl"
                                        height="130px">

                                </v-img>
                                <v-img v-else
                                src="https://www.lifewire.com/thmb/NYLbQgioGo9K2lPekR8vemLzPZw=/1600x1200/filters:no_upscale()/holiday-lights-christmas-wallpaper-5a2821685b6e24001a62aaec.jpg"
                                height="130px"
                                >
                                </v-img>
                            </v-flex>
                            <v-flex>
                                <v-card-title>
                                    <div>
                                        <h1>{{d.title}}</h1>
                                        <div>{{d.description}}</div>
                                        <p>{{d.author}}</p>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        computed : {
            ...mapGetters([
            'loadDishes'
            ])
        },
        methods: {
            goToAddDish() {
                this.$router.push('/repas/nouveau')
            }
        }
    }
</script>