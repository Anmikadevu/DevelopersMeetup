<template>
    
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img class="white--text"
                       height="400px"
                       :src="meetup.imageUrl">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                console.log(meetup);
                                <span class="headline primary text-md-center">{{meetup.title}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                        <span class="blue--text">{{meetup.date}} - {{meetup.location}}</span><br>
                        <span>{{meetup.description}}</span>
                        <br>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        computed: {

            meetup() {

                return this.$store.getters.loadedMeetup
            }
        }
        
    }
</script>
<style scoped>
</style>