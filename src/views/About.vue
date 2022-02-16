<template>
  <div class="about">
    <Header></Header>
    <div class="view">
      <div class="view-header py-6">
        <h2 class="view-title cap small-caps">About Me</h2> 
        <h3 class="breadcumb"><router-link to="/">Home</router-link> / <span>About Me</span></h3>
      </div>
      <div class="view-content flex flex-col md:flex-row items-center md:items-start py-4">
        <div class="about-image p-6"><img src="../assets/about.jpg" width="480" height="600" alt=""></div>
        <div class="about-text p-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi. Hic aut esse praesentium excepturi, accusamus id repellat aliquid ea, commodi ducimus porro! Fuga architecto labore accusamus in quasi odio?
          </p><br>
          <p>Dolor quibusdam beatae reprehenderit eius minus ducimus exercitationem deleniti ad recusandae veritatis, modi distinctio quae repellendus soluta libero veniam eveniet eum iste enim molestiae vitae aliquam vero qui. Expedita, dolores?
          Excepturi voluptas veritatis cumque rem quisquam, expedita quos ipsam minus eligendi quia officia. Quod perferendis corrupti velit sint voluptate animi, necessitatibus officia aut itaque autem dignissimos similique? Eos, qui dignissimos.
          Delectus alias ipsum ab exercitationem omnis facilis sequi, aspernatur quisquam quo. Tempore ducimus illum neque, numquam deleniti nobis minima corrupti dignissimos mollitia rem dolores quisquam vel ipsum? Neque, deleniti magnam!
          Enim, quia! Adipisci, itaque nemo fugit dolorem veritatis modi qui earum dolor.</p><br>
          <p> Assumenda maiores soluta sit. Sapiente quis repellat repudiandae, ut amet ullam laudantium sunt? Nemo accusantium mollitia porro excepturi!</p>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
  name: 'About',
  components: { Header }
}

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