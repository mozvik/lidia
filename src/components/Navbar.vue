<template>
  <div class="navbar fixed h-16 w-screen flex justify-between">
    <div id="menu" class="flex flex-row h-screen" 
    :class="!open ? 
    'transform ease-in duration-300 -translate-x-60':
    'transform ease-in duration-300 '">
      <div id="menu-buttons" class=" ml-8 order-1 relative mt-0 md:mt-16">
        <button @click="open = !open">
            <MenuAlt2Icon class="h-10 w-10 text-blue-500 absolute left-0 top-0 transform ease-in duration-300" :class="!open ? 'rotate-0 opacity-1':'rotate-180 opacity-0'"/>
            <ArrowSmDownIcon class="h-10 w-10 text-blue-500 absolute left-0 top-0 transform ease-in duration-300" :class="open ? 'rotate-90 opacity-1':'-rotate-0 opacity-0'"/>
        </button>
      </div>
        
      <div id="menu-items" class="order-0  pt-16">
        <div>
          <router-link to="/">Home</router-link>
        </div> 
        <div>
          <router-link to="/about">About</router-link>
        </div>
          <div>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
    <div id="logo" class="block md:hidden">LOGO</div>
      
  </div>
</template>

<script>
import { ref, onMounted
 } from 'vue'
 import { MenuAlt2Icon, ArrowSmDownIcon } from '@heroicons/vue/solid'

export default {
  name: 'Navbar',
  components: { MenuAlt2Icon, ArrowSmDownIcon },
  setup(){
    const open = ref(false)

    
    onMounted( () => {
      window.addEventListener('click', function(e){   
      if (!document.getElementById('menu').contains(e.target)){
          open.value = false
        }
      })
    })
   
    return {open}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease; 
}
.fade-enter-from{
  opacity: 0;
  transform: rotate(-90deg);
}
.fade-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}
#menu-items{
  background: green;
  width: 15rem;
}
</style>
