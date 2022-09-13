<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-card-text>
            <h4 class="text-h4 text--primary">Sing In</h4>
            
            <v-text-field label="Username" v-model="userName" />
            <v-alert v-if="v$.userName.$error" type="error">
                {{ v$.userName.$errors[0].$message }}
            </v-alert>

            <v-text-field label="Lastname" v-model="lastName" />
            <v-alert v-if="v$.lastName.$error" type="error">
                {{ v$.lastName.$errors[0].$message }}
            </v-alert>

            <v-text-field label="Email" v-model="email" />
            <v-alert v-if="v$.email.$error" type="error">
                {{ v$.email.$errors[0].$message }}
            </v-alert>

            <v-text-field label="Password" type="password" v-model="password" />
            <v-alert v-if="v$.password.$error" type="error">
                {{ v$.password.$errors[0].$message }}
            </v-alert>

            <v-text-field label="Confirm password" type="password" v-model="confirmationPassword" />
            <v-alert v-if="v$.confirmationPassword.$error" type="error">
                {{ v$.confirmationPassword.$errors[0].$message }}
            </v-alert>

            <v-card-actions>
                <v-btn
                    text
                    color="teal accent-4"
                    @click.prevent="handleSingIn"
                >
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
    </template>

<script>
import useValidate from "@vuelidate/core";
import { helpers, required, email, minLength, sameAs } from "@vuelidate/validators";

export default {
    name: 'SingIn',
    data: () => {
        return {
            //Vuelidate
            v$: useValidate(),
            userName: '',
            lastName: '',
            email: '',
            password: '',
            confirmationPassword: ''
        }
    },
    methods: {

        async handleSingIn() {
            
            const result = await this.v$.$validate()
            
            if (!result) {
                return
            }
            //alert(this.userName + ' '+ this.lastName + ' ' + this.email + ' ' + this.password + ' ' + this.confirmationPassword);
            //this.userName = ''
            this.$store.dispatch('addName', this.userName);
            this.$router.push('/dashboard')
        }
    },
    //Vuelidate
    validations() {
        return {
            userName: {
                required: helpers.withMessage("Name is required", required),
                minLength: minLength(3)
            },
            lastName: {
                required: helpers.withMessage("Lastname is required", required),
                minLength: minLength(4)
            },
            email: {
                required: helpers.withMessage("Email is required", required),
                email: helpers.withMessage("Your email should be in this format: example@domain.com", email)
            },
            password: {
                required: helpers.withMessage("Password is required", required),
                minLength: minLength(6)
            },
            confirmationPassword: {
                required: helpers.withMessage("Confirmation password is required", required),
                sameAs: helpers.withMessage("Passwords don't match", sameAs(this.password))
            },
        }
    }
}
</script>

<style>

</style>