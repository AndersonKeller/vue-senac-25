<script>
import {RouterLink} from "vue-router"
import Header from "@/components/Header.vue";
import Main from "../components/Main.vue";
import { toast } from 'vue3-toastify';
import { apiController } from "../controllers/api.controller";
import { usuarioController } from "../controllers/usuario.controller";
    export default {
        components:{
            Header, Main
        },
        data(){
            return {
                name:"Pedro"
            }
        },
        methods:{
            updateMain(val){
                console.log("update main",val)
            }
        },
        async mounted(){
            const res = await usuarioController.retrieve()
            console.log(res,"res")
           
        }
    }
</script>
<template>
    <Header/>
    <p>Home</p>
    <router-link to="/login">Login</router-link>
    <Main :name="name" @update="updateMain"/>
</template>