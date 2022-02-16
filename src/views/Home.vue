<template>
  <div class="home h-screen flex flex-col justify-center">
    <h1 class="title">Rita di Franco</h1>
    <div class="subtitle pt-6 pb-10">Artist, Fontanafredda</div>
    <div><button class="big-btn">View Gallery</button></div>
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, 
 onMounted} from 'vue'

export default {
  name: 'Home',
  components: {
    // Navbar
  },
  setup(){
    const paintings = reactive({})

    onMounted(() => {
      fetch("http://localhost/wp-lidia/wp-json/wp/v2/media/9")
      // fetch("http://localhost/wp-lidia/wp-json/wp/v2/posts?_embed")
            .then((res) => res.json())
            .then((res) => {
              paintings.data = res;
              console.log('data :>> ', paintings.data );
            });
    })

    return {paintings}
  },
}
</script>
<style scoped>
  .home{
    position: relative;
    width: 100%;
    background:radial-gradient(rgba(0, 0, 0,0.55), rgba(0, 0, 0,0.95));
    background-repeat: no-repeat;
    background-size: cover;    
    background-position: bottom center; 
  }
  .home::before{
    pointer-events: none;
    position: absolute;
    content: '';
    width: 100%;
    height: 100vh;
    background-image: url('../assets/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;    
    background-position: bottom center;
    z-index: -1;
  }

</style>