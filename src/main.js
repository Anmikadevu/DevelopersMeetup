import Vue from 'vue'
//import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import router from './components/router/index.js'
import store from './components/Store'
import * as firebase from 'firebase';

Vue.config.productionTip = false
//Vue.use(VueRouter)


 
new Vue({
   
    render: h => h(App),
    router,
    store,
    created() {

        firebase.initializeApp({

            apiKey: 'AIzaSyAa397z-u5nlNiykm7dLZeWtErC9KJN0iU',
            authDomain: 'devmeetup-7b876.firebaseapp.com',
            databaseURL: 'https://devmeetup-7b876.firebaseio.com',
            projectId: 'devmeetup-7b876',
            storageBucket: 'devmeetup-7b876.appspot.com',
            messagingSenderId: '159473936213',
        })

    }
    
}).$mount('#app')
