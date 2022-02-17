<template>
  <div class="about">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">Get In Touch</h2> 
        <h3 class="breadcumb"><router-link to="/">Home</router-link> / <span>Contact Me</span></h3>
      </div>
      <div class="view-content flex flex-col md:flex-row items-center md:items-start justify-center py-4">
        <div class="form p-5 border-r-2 border-gray-300">
          <form action="" class="grid grid-cols-2 gap-4">
            <div class="flex flex-col col-span-2">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" >
              <div class="error">&nbsp;</div>
            </div>
            
            <div class="flex flex-col">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" >
              <div class="error">&nbsp;</div>
            </div>
            <div class="flex flex-col">
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" >
              <div class="error">&nbsp;</div>
            </div>
            <div class="flex flex-col col-span-2">
              <label for="message">Message</label>
              <textarea type="text" id="messagee" name="messagee" rows="4" ></textarea>
              <div class="error">&nbsp;</div>
            </div>
          </form>
          <button class="float-left big-btn btn-light">Send Message</button>
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

<script>

import Header from '@/components/Header.vue'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/vue/solid'
import { BIconFacebook, BIconTwitter, BIconInstagram } from 'bootstrap-icons-vue';

export default {
  name: 'Contact',
  components: { Header, PhoneIcon, MailIcon, LocationMarkerIcon, BIconFacebook, BIconTwitter, BIconInstagram }
}

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
    /* width: 100px; */
    text-align: start;
  }
  input, textarea{
    width: 100%;
    padding: .5rem;
  }
  
</style>
