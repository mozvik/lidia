<template>
  <div id="main">
    <Navbar></Navbar>
     <div id="views" class="pt-16 md:pt-0">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>

import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useLocaleStore } from "@/store/locale";

export default {
  name: 'App',
  components: {
    Navbar
  },
  setup(){
    const localeStore = useLocaleStore()
    
    onMounted(() => { 
      localeStore.getCategories()
      localeStore.getImages()
    })
  }
}
</script>


<style>
:root{
  --background: #0e0e0c;
  --color: #f2eaea;
  /* --primary: #f15e4b; */
  /* --primary: #ca2c92; */
  --primary: #ff0080;
  --secondary: #d8d4d2;
  /* --secondary: #9e7bb5; */
}
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: var(--color);
}

body, html {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 15px;
    background: var(--color);
}



h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Upright', serif;
    font-weight: 400;
    font-style:normal;
}

.button {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 3px;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.title{
  font-size: 3.25rem;
  font-weight: bold;
  /* text-transform: uppercase; */
  font-variant: small-caps;
  letter-spacing: .25rem;
}
.view-title{
  font-size: 2.1rem;
  font-weight: bold;
  letter-spacing: .1rem;
}
.breadcumb{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
}
.breadcumb>a:hover {
  text-decoration: underline;
}
.subtitle{
  font-size: 1.35rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .25rem;
}
.cap{
  text-transform: capitalize;
}
.small-caps{
  font-variant: small-caps;
}
.big-btn{
  font-size: 1.0rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid var(--color);
  padding: .75rem 1.25rem;
  transition: all .2s ease-in-out;
}
.big-btn:hover{
  transition: all .2s ease-in-out;
  border: 2px solid var(--primary);
  background: var(--primary);
}
.btn-light{
  border: 2px solid var(--background);
}
.view{
  width: 100%;
  height: auto;
  background: var(--color);
  color: var(--background);
}
.view-content{
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



@media screen and (min-width: 992px) {
  body, html {
    font-size: 18px;
}
.title{
  font-size: 5rem;
}
.view-title{
  font-size: 2.35rem;
}

}
</style>
