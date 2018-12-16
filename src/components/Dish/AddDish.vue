<template>
    <div id="addDish">
        <v-container>
             <v-btn flat round to="/repas" left>
                Retour
            </v-btn>
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
                        <v-btn raised 
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
                imageUrl : '',
                image: null,
                img:null,
                items: [
                            {
                            text: 'Accueil',
                            disabled: false,
                            href: '/'
                            },
                            {
                            text: 'Plats',
                            disabled: false,
                            href: '/repas'
                            },
                            {
                            text: 'Ajouter plat',
                            disabled: true,
                            href: 'repas/nouveau'
                            }
                        ]
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
                    title : this.plat,
                    origine : this.origine,
                    description : this.description,
                    by : this.by,
                    image : this.image

                }
                console.log(dish)
                this.$store.dispatch('createDish',dish)
                return this.$swal({
                       type: 'success',
                       title: 'Yummy',
                       text: 'Cool, on va bien manger'
                   }).then( () => {
                       this.$router.back()
                   })
                
            },
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
                /* const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.') <= 0) {
                   return this.$swal({
                       type: 'error',
                       title: 'Ooops...',
                       text: 'Tchiip ajoute une vraie image toi aussi !!!!'
                   });
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image =files[0].name */
            }
        }
    }
</script>