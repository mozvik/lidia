<template>
  <div class="navbar fixed top-0 left-0 h-16 w-full flex justify-between ">
    
    <div id="menu" class="flex flex-row h-screen " 
    :class="!open ? 
    'transform ease-in duration-300 -translate-x-72 ':
    'transform ease-in duration-300 '">
      <div id="menu-buttons" class="ml-2 md:ml-16 order-1 relative mt-2 md:mt-16">
        <button @click="open = !open">
            <MenuAlt2Icon class="h-10 w-10 absolute left-0 top-0 transform ease-in duration-300" :class="!open ? 'rotate-0 opacity-1':'rotate-180 opacity-0'"/>
            <ArrowSmDownIcon class="h-10 w-10  absolute left-0 top-0 transform ease-in duration-300" :class="open ? 'rotate-90 opacity-1':'-rotate-0 opacity-0'"/>
        </button>
      </div>
      <div id="menu-items" class="order-0 pt-16 flex flex-col justify-around items-start pl-8">
        
        <div class="text-6xl p-color pl-7">
          <!-- <h1>L<span class="text-5xl">d</span>F</h1> -->
          <router-link :to="'/'"><img src="../assets/logo.png" alt="" width="180"></router-link>
          
        </div>
        <div class="flex flex-col items-start">

          <div v-for="(item, index) in localeStore.menu" :key="index" class="menu-item transform ease-in-out duration-300"
          :class="open ? '-translate-x-1 opacity-1':'-translate-x-10 opacity-0'"
          :style="open ? 'transition-delay: '+ ((index*75)+100) +'ms':'transition-delay: 0ms'"
          >
              <router-link :to="item.link" @click="open = false">{{ item.name }}</router-link>
          </div>
        </div>
        <div id="lang-select" class="pl-7 flex flex-row">
          <button @click="localeStore.changeLanguage('eng')" :class="localeStore.activeLanguage == 'eng' ? 'selected':''">EN</button>
          <button @click="localeStore.changeLanguage('ita')" :class="localeStore.activeLanguage == 'ita' ? 'selected':''">IT</button>
          <button @click="localeStore.changeLanguage('hun')" :class="localeStore.activeLanguage == 'hun' ? 'selected':''">HU</button>
        </div>
        <div class="pb-7 pl-7">
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

    <div id="logo" class="block md:hidden mr-8 mt-3 text-3xl"><router-link :to="'/'"><img src="../assets/logo-small.png" alt="" width="40"></router-link></div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { MenuAlt2Icon, ArrowSmDownIcon, PhoneIcon, MailIcon, } from '@heroicons/vue/solid'
  import { BIconFacebook, BIconTwitter, BIconInstagram } from 'bootstrap-icons-vue';
  import { useLocaleStore } from "@/store/locale"

  const localeStore = useLocaleStore()
  
  const open = ref(false)


  onMounted( () => { 
    window.addEventListener('click', function(e){   
    if (!document.getElementById('menu').contains(e.target)){
        open.value = false
      }
    })
  })
  

 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
   z-index: 3; 
   background: var(--color);
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
  transition: all .2s ease;
}
.menu-item>a:hover{
  background: var(--primary);
  color: var(--color);
  transition: all .2s ease;
}
#logo{
  color: var(--primary);
  font-family: 'Cormorant Upright', serif;
  font-weight: bold;
}
#lang-select button{
  margin-right: 1rem;
  border-bottom: 1px solid transparent;
  transition: all 0.25s ease-in-out;
}
#lang-select .selected{
  font-weight: bold;
  border-bottom: 1px solid var(--primary);
  transition: all 0.25s ease-in-out;
}

@media screen and (min-width: 768px) {
.navbar{
  background: transparent;  

}
#menu{
  pointer-events: none;
}
#menu-buttons, #menu-items{
  pointer-events: all;
}
}
</style>
