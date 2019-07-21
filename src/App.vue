<template>
    <v-app>

        <v-navigation-drawer temporary app v-model="sideNav">
            <v-list>
                <v-list-tile v-for="items in menuItems" :key="items.title"
                             router
                             :to="items.link">
                    <v-list-tile-action>

                        <v-icon>{{items.icons}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{items.title}}

                    </v-list-tile-content>
                </v-list-tile>


            </v-list>

        </v-navigation-drawer>
        <v-toolbar dark app class="primary">
            <v-toolbar-side-icon @click.native="sideNav=!sideNav"
                                 class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-toolbar-title style="cursor:pointer">DevMeetup</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-and-down">
                <v-btn flat v-for="items in menuItems"
                       :key="items.title"
                       router
                       :to="items.link">
                    <v-icon>{{items.icons}}</v-icon>
                    {{items.title}}
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>
         <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>




       
        <v-footer app></v-footer> 
       
    </v-app>
</template>

<script>


export default {
 name:'App',
 
  data () {
      return {
          sideNav: false,
          menuItems: [

              { icons: 'supervisor_account', title:'View Meetups',link:'/meetup' },
              { icons: 'room', title: 'Organize MeetUp',link:'/meetup/new' },
              { icons: 'person', title: 'Profile',link:'/profile' },
              { icons: 'face', title: 'SIGN UP' ,link:'/signup'},
              { icons: 'lock', title: 'SIGN IN',link:'/signin' }
          ]

    }
  }
}
</script>
