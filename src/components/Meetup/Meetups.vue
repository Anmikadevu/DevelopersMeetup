<template>


    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card color="cyan darken-2" class="white--text mb-4 " v-for="meetup in meetups" :key="meetup.id" >
                    <v-layout>
                        <v-flex xs5>
                            <v-img :src="meetup.imageUrl"
                                   height="150px" class="ma-0"
                                   contain></v-img>
                        </v-flex>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{meetup.title}}</div>
                                    <div>{{meetup.date}}</div>
                                    
                                    <div><v-btn :to="'/meetup/'+ meetup.id"
                                    flat style="cursor:pointer"><v-icon > arrow_right</v-icon>VIEW MEETUP</v-btn></div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                    
                    
                </v-card>
            </v-flex>
        </v-layout>

        
        </v-container>
        </template>
<script>
    export default {

        computed:{

            meetups() {

                return this.$store.getters.loadedMeetups
            }

    }

    }

</script>