<template>
   <h1>USERS LIST</h1>
   <ul v-for="user in users" :key="user.id">
    <li>{{ user.name }}</li>
   </ul>
</template>

<script>
export default {
    // for fetching data
    computed: {
        users(){
            return this.$store.state.usersData
        }
    },
    mounted(){
        this.$store.dispatch("fetchUsers")
    }

}
</script>

<style>

</style>