<template>
  <div class="paint-details">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 v-if="painting" class="view-title cap small-caps">{{painting.title.rendered}}</h2> 
        <h3 class="breadcumb"><router-link to="/">Home</router-link> / <router-link to="/gallery">Gallery</router-link> </h3>
      </div>
      <div v-if="painting" class="view-painting mx-0 md:mx-32 flex flex-col md:flex-row">
        <div class="painting-aside text-left">
          <div class="mx-3 mb-6 text-lg" v-html="painting.content.rendered"></div>
          <div class=" mx-7">
            <ul class="list-disc">
              <li>{{painting.acf.style}}</li>
              <li>{{painting.acf.tech}}</li>
              <li>{{painting.acf.size}}</li>
              <li>{{painting.acf.price}}</li>
              
              
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

<script>
import { reactive, watchEffect, ref } from 'vue'
import { useGalleryStore } from "@/store/gallery"
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'

export default {
  name: 'PaintDetails',
  components: { Header},
   
  setup() {
    const galleryStore = reactive(useGalleryStore())
    const gallery = reactive(galleryStore.data)
    const route = useRoute()
    // const painting = computed(() => {
    //   console.log(' :>> ', gallery.filter(e => e.id == route.params.id));
    //   return gallery ? gallery.filter(e => e.id == route.params.id):null;
    // });
    const painting = ref()

    watchEffect(() => painting.value = gallery.find(e => e.id == route.params.id))

    return { painting }
  }
}

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