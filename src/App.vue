<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

  export default {
    components:{
      Header,Main
    }
  }

</script>
<template>
  <router-view></router-view>
  <!-- <Header/>
  <Main>
    <p>filho</p>
  </Main> -->
</template>
<style>
header {
  background-color: blue;
}
</style>