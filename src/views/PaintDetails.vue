<template>
  <div class="paint-details">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 v-if="painting" class="view-title cap small-caps">{{painting.title}}</h2> 
        <h3 class="breadcumb"><router-link to="/">{{localeStore.changeContent(localeStore.gallery).breadcumbHome}}</router-link> / <router-link to="/gallery">{{localeStore.changeContent(localeStore.gallery).breadcumbGallery}}</router-link> </h3>
      </div>
      <div v-if="painting" class="view-painting mx-0 md:mx-32 flex flex-col md:flex-row">
        <div class="painting-aside text-left">
          <div class="mx-3 mb-6 text-lg" v-html="painting.description"></div>
          <div class=" mx-7">
            <ul class="list-disc">
              <li v-if="painting.acf.style">{{painting.acf.style}}</li>
              <li v-if="painting.acf.tech">{{painting.acf.tech}}</li>
              <li v-if="painting.acf.size">{{painting.acf.size}}</li>
              <li v-if="painting.acf.price">{{painting.acf.price}}</li>
            </ul>
          </div>
        </div> 
        <div class="image" >
          <img :src="painting.acf.full" :alt="painting.title.rendered">
        </div>
      </div>  
     
    </div>
  </div>
</template>

<script setup>
  import { watchEffect, ref } from 'vue'
  import { useLocaleStore } from "@/store/locale"
  import { useRoute } from 'vue-router'
  import Header from '@/components/Header.vue'

  const localeStore = useLocaleStore()
  // const gallery = localeStore.imageText
  const route = useRoute()

  const painting = ref()

  watchEffect(() => painting.value = localeStore.imageText.find(e => e.id == route.params.id))
</script>

<style scoped>

.view-painting{
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
}
  .painting-aside {
    width: 380px;
  }
  

@media screen and (min-width: 768px) {

}
@media screen and (min-width: 992px) {

}
@media screen and (min-width: 1280px) {

}
</style>