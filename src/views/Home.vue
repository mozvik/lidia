<template>
  <div class="home flex flex-col justify-center">
    
    <h1 class="title">Lídia di Franco</h1>
    <div class="subtitle pt-6 pb-10">Artist, Fontanafredda</div>
    <div><router-link to="/gallery"><button class="big-btn">View Gallery</button></router-link></div>
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive } from 'vue'

export default {
  name: 'Home',
  components: {
  },
  setup(){
    const paintings = reactive({})

    return {paintings}
  },
}
</script>
<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: radial-gradient( rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.65)), url('../assets/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;    
    background-position: bottom center; 
  }
    
</style>