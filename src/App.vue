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
:root{
  --background: #2d2a32;
  --color: #fafdf6;
  --primary: #db5461;
  --secondary: #ffd9c4;
}
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: var(--color);
}

body {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
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
  font-size: 4rem;
  font-weight: bold;
  /* text-transform: uppercase; */
  font-variant: small-caps;
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
