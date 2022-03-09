<template>
  <div class="home flex flex-col justify-center">
    <h1 class="title">Lídia di Franco</h1>
    <div class="subtitle pt-6 pb-10">Artist, Fontanafredda</div>
    <div><router-link to="/gallery"><button class="big-btn">View Gallery</button></router-link></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: radial-gradient( rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.65)), url('../assets/hero.jpg');
    /* background-image: radial-gradient( rgba(200, 0, 200, .25), rgba(0, 0, 0, 0.95)), url('../assets/hero.jpg'); */
    /* background-image: linear-gradient( to right, rgba(0, 0, 0, .65) 5%, rgba(0, 0, 0, .95) 55%, rgba(250, 0, 250, 0.38)), url('../assets/hero.jpg'); */
    /* background-image: url('../assets/hero.jpg');  */
    /* filter:hue-rotate(290deg); */
    background-repeat: no-repeat;
    background-size: cover;    
    background-position: bottom center; 
  }
    
</style>