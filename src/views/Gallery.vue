<template>
  <div class="gallery">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">My Works</h2> 
        <h3 class="breadcumb"><router-link to="/">Home</router-link> / <span>Gallery</span></h3>
      </div>
      <div class="view-gallery mx-0 md:mx-32 border border-indigo-600 flex flex-col md:flex-row">
        <div class="categories-menu hidden md:block text-left">
          <h4 class="caps small-caps mx-3 mb-6 font-bold text-xl">Categories</h4>
          <div class="categories-menu-wrapper py-3 border-l-1 border-indigo-600">
            <div value="all" class="p-2 font-bold category-item"
            :class="active == 0 ? 'category-active':''"
            @click="active = 0">All
            </div>
            <div v-for="(item, index) in categories" :key="index"
            class="p-2 font-bold category-item"
            :class="active == index + 1 ? 'category-active':''"
            @click="active = index + 1"
            >
              {{item.name}} 
            </div>
          </div>
        </div>
        <div class="categories-select block md:hidden">
          <select name="categories" id="mobile-categories">
            <option value="all">All</option>
            <option v-for="(item, index) in categories" :key="index" :value="item.link">
            {{item.name}} 
            </option>
          </select>
        </div>
        <div class="images">
          
          <div v-for="(item, index) in gallery" :key="index" >
            <!-- {{item.title.rendered}}  -->
            <img :src="item.acf.thumbnail" alt="">
            </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useCategoriesStore } from "@/store/categories"
import { useGalleryStore } from "@/store/gallery"

import Header from '@/components/Header.vue'

export default {
  name: 'Gallery',
  components: { Header },
   
  setup() {
    const categoriesStore = reactive(useCategoriesStore())
    const galleryStore = reactive(useGalleryStore())
    const categories = reactive(categoriesStore.data)
    const gallery = reactive(galleryStore.data)

    const active = ref(0)
    
    return { categories, gallery, active }
  }
}

</script>


<style scoped>
.view-gallery{
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
}
  .categories-menu {
    min-width: 300px;
  }
  .category-item{
    /* border-left: 1px solid var(--background); */
    position: relative;
    transition: color .25s ease-in-out;
  }
  .category-item:hover{
    cursor: pointer;
    color: var(--primary);
    transition: color .25s ease-in-out;
  }
  .category-active{
    /* border-left: 2px solid var(--primary); */
    position: relative;
    
  }
  .category-item:before{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0%;
    transition: all .25s ease-in-out;
  }
  .category-active:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: var(--primary);
    transition: all .25s ease-in-out;
  }
  .images{

  column-count: 3;
  column-gap: 1.5rem;
  }
  .images>div{
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 1.5rem;
    break-inside: avoid;
  }
  .images>div>img {   
    grid-row: 1 / -1;
    grid-column: 1;
    width: 416px;
}
</style>