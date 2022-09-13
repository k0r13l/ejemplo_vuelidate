<template>
   <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-card-text>
            <h4 class="text-h4 text--primary">Welcome {{ this.$store.getters.getUserName }}</h4>
        </v-card-text>
        <button @click="this.$router.push('/')">Log Out</button>
   </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>