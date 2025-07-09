<script>
    export default {
        name:"Main",
        emits:["update","close"],
        props:["name"],
        data(){
            return{
                list:[
                    {
                        id:"1",
                        name:"teste"
                    },
                    {
                        id:"2",
                        name:"teste2"
                    },
                    {
                        id:"3",
                        name:"teste3"
                    }
                ],
                posts:[],
                item:false,
                usuario:{

                    email:"",
                    password:""
                }
            }
        },
        methods:{
            fazerLogin(){
                // console.log(this.usuario,"values")
                this.$emit("update",this.$root)
            }
        },
        watch:{
            "usuario.password"(){
                console.log(this.usuario.password,"watch pass")
            }
        },
        async mounted(){
            console.log("mounted",this.name)
            // this.fazerLogin()
        },
        created(){
            console.log("created")
        },
        beforeCreate(){
            console.log("before create")
        },
        beforeMount(){
            console.log("before mount")
        }

    }
</script>
<template>
    <main>

        <!-- <p v-if="item">{{ item.name }}</p>
        <ul>
            <li v-for="item in list">
                <p v-if="item.id==='2'">{{ item.name }} - é 2</p>
                <p v-else>{{ item.name }} - não é 2</p>
            </li>
        </ul> -->
        <p>{{ name }}</p>
        <form @submit.prevent="fazerLogin">
            <fieldset>
                <label for="email">Email</label>
                <input v-model="usuario.email" id="email" type="text" placeholder="digite seu email">
            </fieldset>
            <fieldset>
                <label for="pass">Email</label>
                <input v-model="usuario.password" id="pass" type="password" placeholder="*****">
            </fieldset>
            <button type="submit">Login</button>
        </form>
        <slot></slot>
    </main>
</template>
<style scoped></style>