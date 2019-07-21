import Vue from 'vue'
import Router from 'vue-router';
import Meetup from '@/components/Meetup/Meetup';
import Meetups from '@/components/Meetup/Meetups';
import CreateNewMeetup from '@/components/Meetup/CreateNewMeetup';
import Profile from '@/components/User/Profile';
import Signin from '@/components/User/Signin';
import Signup from '@/components/User/Signup';
import Home from '@/components/Home';
Vue.use(Router)
export default  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'Home',
           component: Home
        },
        {
            path: '/meetup',
            name: 'Meetups',
            component: Meetups
        },
        {
            path: '/meetup/new',
            name: 'CreateNewMeetup',
            component: CreateNewMeetup,

        },
        {
            path: '/meetup/:ID',
            name: 'Meetup',
            component: Meetup,

        },

        {
            path: '/profile',
            name: 'Profile',
            component: Profile,

        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        }
    ]
})