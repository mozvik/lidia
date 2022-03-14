<template>
  <div class="gallery">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">{{localeStore.changeContent(localeStore.gallery).subtitle}}</h2> 
        <h3 class="breadcumb"><router-link to="/">{{localeStore.changeContent(localeStore.gallery).breadcumbHome}}</router-link> / <span>{{localeStore.changeContent(localeStore.gallery).breadcumbGallery}}</span></h3>
        
      </div>
      <div class="view-gallery mx-0 md:mx-32 flex flex-col md:flex-row">
        <div class="categories-menu hidden md:block text-left">
          <h4 class="caps small-caps mx-3 mb-6 font-bold text-xl">{{localeStore.changeContent(localeStore.gallery).categories}}</h4>
          <p></p>
          <div class="categories-menu-wrapper">

            <div v-for="(item, index) in categories" :key="index"
            class="p-2 font-bold category-item"
            :class="active == index ? 'category-active':''"
            @click="active != index ? changeActive(index):''"
            >
              {{item.name}} 
            </div>
          </div>
        </div>
        <div class="categories-select block md:hidden">
          <select name="categories" id="mobile-categories" class="min-w-max p-1"
          @change="changeActive(selected)" v-model="selected">
            <option v-for="(item, index) in localeStore.localeCategories" :key="index" :value="index"
            >
            {{item.name}} 
            </option>
          </select>
        </div>
        
        <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader v-if="!gallery.length" dotColor="blue" :scale="1.0"></Loader>
        </div>
        <div class="images" v-if="gallery.length" >
          
          <transition-group name="bounce">
            <div v-for="(item) in filteredGallery" :key="item.id">
              <router-link :to="'/gallery/' + item.id">
                <div class="grid-item">
                  <img v-show="item" :src="item.acf.thumbnail" alt="" class="grid-img">
                  <div class="grid-text pointer-events-none">
                    <h4 class="subtitle mb-5">{{item.title}}</h4>
                    <div><ArrowCircleRightIcon class="h-7 w-7 p-color"/></div>
                  </div>
                </div>
              </router-link>
            </div>
         </transition-group>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
  // import { useGalleryStore } from "@/store/gallery"
  import Loader from '@/components/Loader.vue'
  import Header from '@/components/Header.vue'
  import { useLocaleStore } from "@/store/locale"

  const localeStore = useLocaleStore()

  // const categoriesStore = reactive(useCategoriesStore())
  // const galleryStore = reactive(useGalleryStore())
  const categories = localeStore.categories
  const gallery = localeStore.imageText
  const active = ref(0)
  const selected = ref(0)

  const filteredGallery = computed(() => {
    if( active.value == null) {
      return undefined
    }else if (active.value == 0) {
      return localeStore.imageText
    } else {
      return localeStore.imageText.filter(x => x.categories.find(element => element == activeCategoryId.value));
    }
  });


  const activeCategoryId = computed(() => categories[active.value].id      )

  const changeActive = (id) => {
    active.value = null
    setTimeout(() => {
        active.value = id
      }, 220);
  }
</script>


<style scoped>
.gallery {
  min-height: 110vh;
}
.bounce-enter-active,
.bounce-leave-active {
  transition: all .20s ease;
}

.bounce-enter-from, .bounce-leave-to {
  opacity: 0;
  transform-origin: top;
  transform: scale(0);
  transition: all 0.20s ease;
}

.view-gallery{
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
}
  .categories-menu {
    min-width: 300px;
  }
  .category-item{
    position: relative;
    transition: color .25s ease-in-out;
  }
  .category-item:hover{
    cursor: pointer;
    color: var(--primary);
    transition: color .25s ease-in-out;
  }
  .category-active{
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
    top: 12.5%;
    left: 0;
    width: 2px;
    height: 70%;
    background: var(--primary);
    transition: all .25s ease-in-out;
  }
.images {
  width: auto;
  margin: 20px auto;
  columns: 1;
  column-gap: 30px;
  
}
.images>div{
  width: 100%;
  break-inside: avoid;
  margin-bottom: 30px;
  transition: all .20s ease;
}
.images>div>img {
  width: 100%;
}
.grid-item{
  border: 1px solid  rgba(110,110,110,0.5);
  padding: .25rem;
}

@media screen and (min-width: 768px) {
.images{
    columns: 1;
    
  } 
}
@media screen and (min-width: 992px) {
  .categories-menu-wrapper{
    position: relative;
    
  }
  .categories-menu-wrapper:before{
    content: "";
    width: 1px;
    height: 90%;
    position: absolute;
    top: 3%;
    left: 0;
    background: var(--primary);
    opacity: .3;
  }
.images{
    columns: 2;
  } 
  .grid-item{
    position: relative;
    border: none;
    padding: 0;
    overflow: hidden;
  }
  
  .grid-item::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    height: 100%;
    background: rgba(255,70,70,0.75);
    transition: all .25s ease-in-out;
  }
  .grid-item::after{
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    right: 0;
    width: 50%; 
    height: 100%;
    background: rgba(170,0,0,.35);
z-index: 1;
    transition: all .25s ease-in-out;
  }
  .grid-item:hover:before{
    right: 0;
    transition: all .2s ease-in-out;
  }
  .grid-item:hover:after{
    left: 25%;
    
    transition: all .25s ease-in-out;
  }
  .grid-text{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    opacity: 0;
    transition: all .25s ease-in-out;
    color: var(--color);
     z-index: 2; 
  }
  .grid-item:hover .grid-text{
    opacity: 1;
    transition: all .25s ease-in-out;
  }
  .grid-item:hover{
    cursor: pointer;
  }
}
@media screen and (min-width: 1280px) {
.images{
    columns: 3;
    
  } 
}
</style>