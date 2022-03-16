<template>
  <div class="about">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">{{localeStore.changeContent(localeStore.contact).subtitle}}</h2> 
        <h3 class="breadcumb"><router-link to="/">{{localeStore.changeContent(localeStore.contact).breadcumbHome}}</router-link> / <span>{{localeStore.changeContent(localeStore.contact).breadcumbContact}}</span></h3>
      </div>
      <div class="view-content flex flex-col md:flex-row items-center md:items-start justify-center py-4">
        <div class="form p-5 border-r-2 border-gray-300">
          <form action="" class="grid grid-cols-2 gap-4">
            <div class="flex flex-col col-span-2">
              <label for="name">{{localeStore.changeContent(localeStore.contact).name}}</label>
              <input type="text" id="name" name="name" >
              <div class="error">&nbsp;</div>
            </div>
            
            <div class="flex flex-col">
              <label for="email">{{localeStore.changeContent(localeStore.contact).email}}</label>
              <input type="email" id="email" name="email" >
              <div class="error">&nbsp;</div>
            </div>
            <div class="flex flex-col">
              <label for="phone">{{localeStore.changeContent(localeStore.contact).phone}}</label>
              <input type="text" id="phone" name="phone" >
              <div class="error">&nbsp;</div>
            </div>
            <div class="flex flex-col col-span-2">
              <label for="message">{{localeStore.changeContent(localeStore.contact).message}}</label>
              <textarea type="text" id="messagee" name="messagee" rows="4" ></textarea>
              <div class="error">&nbsp;</div>
            </div>
             <div class="flex flex-row items-center col-span-2">
              <input type="checkbox" id="gdpr" name="gdpr" >
              <label for="gdpr">{{localeStore.changeContent(localeStore.contact).gdpr}}<router-link to="/privacy" style="color: dodgerblue">{{localeStore.changeContent(localeStore.contact).gdpr2}}</router-link></label>
              <div class="error">&nbsp;</div>
            </div>
          </form>
          <button class="float-left big-btn btn-light mt-5">{{localeStore.changeContent(localeStore.contact).sendButton}}</button>
        </div>
        <div class="divide-y divide-dashed"></div>
        <div class="contacts p-5"><br>
          <div class="flex py-1">
            <LocationMarkerIcon class="h-5 w-5 mr-4 p-color"></LocationMarkerIcon>
            <div class="text-left">
              <p>2375 Circle Drive</p>
              <p>Houston, TX 77027</p>
            </div>
          </div>
          <div class="flex pt-12">
            <PhoneIcon class="h-5 w-5 mr-4 p-color"/>
            <p>+39 000 000 00</p>
          </div>
          <div class="flex">
            <MailIcon class="h-5 w-5 mr-4 p-color"></MailIcon>
            <p>example@.com</p>
          </div>
          <div class="flex mt-14">
            <BIconFacebook class="h-6 w-6 mr-5"/>
            <BIconTwitter class="h-6 w-6 mr-5"/>
            <BIconInstagram class="h-6 w-6 mr-5"/>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/vue/solid'
  import { BIconFacebook, BIconTwitter, BIconInstagram } from 'bootstrap-icons-vue';
  import { useLocaleStore } from "@/store/locale"

  const localeStore = useLocaleStore()
</script>

<style scoped>
  .form{
    flex-basis: 66%;
    width: 100%;
  } 
  .contacts{
    flex-basis: 30%;
    width: 100%;
  }
  label { 
    text-align: start;
  }
  input, textarea{
    width: 100%;
    /* width: auto; */
    padding: .5rem;
  }
  input[type="checkbox"]{
    width: auto;
    margin-right: .5rem;
  }
  
</style>
