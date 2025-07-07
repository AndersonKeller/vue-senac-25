<script>
  export default {
    data(){
      return{
        count:0
      }
    },
    methods:{
      increment(){
        console.log("aki")
        this.count++
      }
    }
  }

</script>
<template>

<header>
  <h2>Header</h2>
  <button @click="increment">{{ count }}</button>
</header>
</template>
<style scoped>
header {
  background-color: red;
}
</style>