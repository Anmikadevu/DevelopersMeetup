<template>

    <v-container>
        <v-form @submit.prevent="onSignUp">
            <v-layout>

                <v-flex xs12 md4>
                    <v-text-field v-model="email"
                                  id="email"
                                  name="email"
                                  type="email"
                                  label="Mail"
                                  required
                                  autocomplete="new-password">

                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field v-model="password"
                                  id="password"
                                  name="password"
                                  type="password"
                                  label="Password"
                                  required
                                  autocomplete="new-password"
                                  >

                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field v-model="confirmpassword"
                                  id="confirmpassword"
                                  name="confirmpassword"
                                  type="password"
                                  label="confirmpassword"
                                  required
                                  autocomplete="new-password"
                                  :rules="[comparePasswords]"
                                  >

                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-btn class="secondary" type="submit">
                    SignUp
                </v-btn>
                
            </v-layout>
        </v-form>


    </v-container>
</template>
<script>


    export default {

        data() {

            return {

                email: '',
                password: '',
                confirmpassword:''
            }
        },
        computed: {
            comparePasswords() {
                return (this.password !== this.confirmpassword ? "Passwords do not match" : ''
                    )

            }


        },

        methods: {

            onSignUp() {

                console.log('Email', this.email);
                console.log('password',this.password);
                console.log('confirmpassword',this.confirmpassword);
               
            }
        }

    }
</script>