<template class="ma-0 pa-0">

    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center">
                <v-btn large class="info" to="/meetup">Explore Meetups</v-btn>

            </v-flex>
            <v-flex xs12 sm6>
                <v-btn large class="info" to="/meetup/new">Organize Meetups</v-btn>

            </v-flex>

            <v-flex xs12 class="mt-2">
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups"
                                     :key="meetup.id"
                                     :src="meetup.imageUrl"
                                     @click="onLoadMeetup(meetup.id)"
                                     >
                        <div class="title">
                            {{meetup.title}}
                        </div>

                    </v-carousel-item>

                </v-carousel>
            </v-flex>

        </v-layout>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 class="text-xs-center">
               <p>Join our Awesome Meetups</p>
            </v-flex>
            </v-layout>
    </v-container>
</template>
<script>

    export default {

        computed: {
            meetups() {

                return this.$store.getters.featuredMeetups
            }

        },


       
        methods: {

           

            onLoadMeetup(id) {

                this.$router.push('/meetup/'+id)
            }
        }
    }



</script>
<style scoped>

.title{


    position:relative;
   top:420px;
   padding-left:500px;
   color:white
}

</style>