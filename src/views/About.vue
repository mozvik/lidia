<template>
  <div class="about">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">{{localeStore.changeContent(localeStore.about).subtitle}}</h2> 
        <h3 class="breadcumb"><router-link to="/">{{localeStore.changeContent(localeStore.about).breadcumbHome}}</router-link> / <span>{{localeStore.changeContent(localeStore.about).subtitle}}</span></h3>
      </div>
      <div class="view-content flex flex-col md:flex-row items-center md:items-start py-4">
        <div class="about-image p-6"><img src="../assets/about.jpg" width="480" height="600" alt=""></div>
        <div class="about-text p-6">
          <p>{{localeStore.changeContent(localeStore.about).text1}}
          </p><br>
          <p>{{localeStore.changeContent(localeStore.about).text2}}</p><br>
          <p>{{localeStore.changeContent(localeStore.about).text3}}</p>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import { useLocaleStore } from "@/store/locale"

  const localeStore = useLocaleStore()
</script>

<style scoped>
  img{
    max-width: 480px;
    width: 100%;
    height: auto;
  }

  .about-image{
    object-fit: cover;
    flex-basis: 50%;
  }
  .about-text{
  flex-basis: 50%;
  }
</style>