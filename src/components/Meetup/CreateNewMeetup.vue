<template>
  
            
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                    <v-layout>
                        <v-flex xs12 md4>
                            
                        </v-flex>
                        <v-flex xs12 md4>
                            <h1>Create a new Meetup</h1>


                            <v-text-field v-model="title"
                                          label="Title"
                                          name="title"
                                          required>

                            </v-text-field>

                            <v-text-field v-model="location"
                                          label="Location"
                                          name="location"
                                          required>

                            </v-text-field>

                            <v-text-field v-model="imageUrl"
                                          label="ImageUrl"
                                          name="imageUrl"
                                          required></v-text-field>
                            <h4>Choose a Date && Time</h4>
                            <v-date-picker v-model="date" class="mb-2"></v-date-picker>
                           
                            <v-time-picker v-model="time"></v-time-picker>
                            
                            <v-textarea name="description"
                                        label="Description"
                                        v-model="description"
                                        hint="Hint text"></v-textarea>

                            <v-btn class="primary" :disabled="!formIsValid">Create Meetup</v-btn>
                        </v-flex>
                        
                    </v-layout>
                </v-form>
</template>
<script>
 export default {
     
        data() {
            return {

                title: '',
                location: '',
                imageUrl: '',
                decsription: '',
                date: '',
                time:''
            }
        },
        computed: {


                formIsValid(){

                    return(
                         this.title !== '' &&
                        this.location !== '' &&
                        this.imageUrl !== '' &&
                        this.description !== '')
                }
        }

        }


    
</script>
