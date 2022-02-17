<template>
  <div class="navbar fixed h-16 w-screen flex justify-between">
    <div id="menu" class="flex flex-row h-screen" 
    :class="!open ? 
    'transform ease-in duration-300 -translate-x-72 ':
    'transform ease-in duration-300 '">
      <div id="menu-buttons" class=" ml-16 order-1 relative mt-0 md:mt-16">
        <button @click="open = !open">
            <MenuAlt2Icon class="h-10 w-10  absolute left-0 top-0 transform ease-in duration-300" :class="!open ? 'rotate-0 opacity-1':'rotate-180 opacity-0'"/>
            <ArrowSmDownIcon class="h-10 w-10  absolute left-0 top-0 transform ease-in duration-300" :class="open ? 'rotate-90 opacity-1':'-rotate-0 opacity-0'"/>
        </button>
      </div>
        
      <div id="menu-items" class="order-0 pt-16 flex flex-col justify-around items-start pl-8">
        <div class="text-6xl p-color pl-7"><h1>RdF</h1></div>
        <div class="flex flex-col items-start">
          <div v-for="(item, index) in menuItems" :key="index" class="menu-item transform ease-in-out duration-300"
          :class="open ? '-translate-x-1 opacity-1':'-translate-x-10 opacity-0'"
          :style="open ? 'transition-delay: '+ ((index*75)+100) +'ms':'transition-delay: 0ms'">
            

              <router-link :to="item.link" @click="open = false">{{ item.name }}</router-link>

          </div>
        </div>
        <div class=" pl-7">
          <div class="flex">
            <PhoneIcon class="h-5 w-5 mr-4 p-color"/>
            <p>+39 000 000 00</p>
          </div>
          <div class="flex">
            <MailIcon class="h-5 w-5 mr-4 p-color"></MailIcon>
            <p>example@.com</p>
          </div><br>
          <div class="flex">
            <BIconFacebook class="h-6 w-6 mr-5"/>
            <BIconTwitter class="h-6 w-6 mr-5"/>
            <BIconInstagram class="h-6 w-6 mr-5"/>
          </div>
        </div>
      </div> 
      
    
      

    </div>

    <div id="logo" class="block md:hidden">LOGO</div>
      
  </div>
</template>

<script>
import { ref, onMounted
 } from 'vue'
 import { MenuAlt2Icon, ArrowSmDownIcon, PhoneIcon, MailIcon, } from '@heroicons/vue/solid'
 import { BIconFacebook, BIconTwitter, BIconInstagram } from 'bootstrap-icons-vue';

export default {
  name: 'Navbar',
  components: { MenuAlt2Icon, ArrowSmDownIcon, PhoneIcon, MailIcon, BIconFacebook, BIconTwitter, BIconInstagram },
  setup(){
    const open = ref(false)

    const menuItems = [{
      name: 'Home',
      link: '/',
    },{
      name: 'About',
      link: '/about',
    },{
      name: 'Gallery',
      link: '/gallery',
    }
    // ,{
    //   name: 'Services',
    //   link: '/services',
    // }
    ,{
      name: 'Contact',
      link: '/contact',
    }
    ]

    
    onMounted( () => {
      window.addEventListener('click', function(e){   
      if (!document.getElementById('menu').contains(e.target)){
          open.value = false
        }
      })
    })
   
    return {open, menuItems}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
   z-index: 3; 
}
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
.p-color{
  color: var(--primary);
}
#menu-items{
  background: var(--secondary);
  color: var(--background);
  width: 18rem;
  font-weight: bold;
  
}
#menu-buttons button{
 color: var(--primary);
}
.menu-item>a{
  
  display: inline-block;
  padding: 1rem 9rem 1rem 2rem;
  transition: all .1s ease;
}
.menu-item>a:hover{
  background: var(--primary);
  color: var(--color);
  transition: all .1s ease;
}

</style>
