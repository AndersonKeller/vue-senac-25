<script>
import {RouterLink} from "vue-router"
import Header from "@/components/Header.vue";
import Main from "../components/Main.vue";
    export default {
        components:{
            Header, Main
        },
        methods:{
            updateMain(val){
                console.log("update main",val)
            }
        }
    }
</script>
<template>
    <Header/>
    <p>Home</p>
    <router-link to="/login">Login</router-link>
    <Main name="Teste" @update="updateMain"/>
</template>