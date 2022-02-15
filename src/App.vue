<template>
  <div id="main">
    <Navbar></Navbar>
    <div id="views" class="pt-16 md:pt-0">
      <router-view/>
    </div>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: gainsboro;
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
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
}
.subtitle{
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
}
.big-btn{
  font-size: 1.0rem;
  font-weight: normal;
  text-transform: uppercase;
  border: 2px solid gainsboro;
  padding: .75rem 1.25rem;
}
</style>
