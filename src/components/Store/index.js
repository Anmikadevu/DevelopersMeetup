import Vue from 'vue';
import Vuex from 'vuex'
import * as firebase from 'firebase';
Vue.use(Vuex);

 const store = new Vuex.Store({
    state :{

        loadedMeetups: [
            {
                imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                , id: '34567xdcfvgbh',
                title: 'Meetup in Newyork',
                date: '2019-07-9',
                location: 'Newyork',
                description:"its Newyork Newyork"

            },
            {
                imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                , id: '33455cvbnfgh',
                title: 'Meetup in Paris',
                date: '2018-09-7',
                location: 'Paris',
                description:'its paris'
            },
            {
                imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '34567cfvgh',
                title: 'Meetup in  tokyo',
                date:'2017-08-5',
                location: 'Tokyo',
                description:'its tokyo'
            }

         
        ],
        user: {

            id: '455666',
            registeredMeetups: ['34567cfvgh']
        }


    },
     mutations: {

         setUser(state, payload) {
             state.user = payload
         },


     },
     actions: {

         signUserUp({ commit },payload) {

             firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)

         }







     },
    getters: {

        loadedMeetups(state) {


            return state.loadedMeetups.sort((meetupA,meetupB) => {

                return meetupA.date > meetupB.date

            })
        },

        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {

                    return meetup.id === meetupId

                })

            }
            },
           

        featuredMeetups(state,getters) {

            return getters.loadedMeetups.slice(0,5)
        },

    }



})
export default store;