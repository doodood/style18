<template>
    <div id="addDish">
        <v-container>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <h4 class="primary--text">Plat apporté</h4>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-form  @submit.prevent="onCreateDish">
                        <v-text-field
                        label="Plat*"
                        required
                        v-model="plat"
                        ></v-text-field>
                        <v-text-field
                        label="Origine*"
                        required
                        v-model="origine"
                        ></v-text-field>
                        <v-text-field
                        label="Image"
                        required
                        v-model="image"
                        ></v-text-field>
                        <v-img :src="image" height="200px"></v-img>
                        <v-textarea
                        label="Description"
                        required
                        v-model="description"
                        ></v-textarea>
                        <v-text-field
                        label="Fait par*"
                        required
                        v-model="by"
                        ></v-text-field>
                        <v-btn raised 
                                round 
                                block 
                                color="red accent-4" 
                                class="white--text" 
                                :disabled="!formValid"
                                type="submit"> 
                            Ajouter
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        data () {
            return {
                plat : '',
                origine : '',
                description : '',
                by : '',
                image : ''
            }
        },
        computed : {
            formValid () {
                return this.plat !== '' &&
                       this.by !== '' &&
                       this.origine !== ''
            }
        },
        methods : {
            onCreateDish() {
                const dish = {
                    plat : this.plat,
                    origine : this.origine,
                    description : this.description,
                    by : this.by,
                    image : this.image
                }
                this.$store.dispatch('createDish',dish)
            }
        }
    }
</script>