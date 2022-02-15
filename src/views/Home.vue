<template>
  <div class="home h-screen">
    
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis et qui. Veniam odit sint, perferendis soluta voluptatum alias suscipit ducimus architecto harum, corporis, doloremque praesentium! Molestiae nam asperiores distinctio nisi porro aliquam, consectetur libero aut qui cupiditate tenetur quos blanditiis accusamus impedit ad illum. Ipsam, sed rem laudantium commodi nisi dicta optio reprehenderit tempora asperiores eius. Nesciunt cum perferendis facere fugiat, dignissimos reiciendis sequi id aspernatur odio ad accusantium quae nobis impedit, perspiciatis non eaque asperiores? Culpa praesentium, ratione quis est cum adipisci excepturi iusto, error quas eligendi eaque, reiciendis autem reprehenderit. Quaerat sequi omnis animi sed assumenda, officiis ipsa maxime atque illum ullam iure minus autem a odio dolore sit porro nesciunt illo voluptatem distinctio laborum tenetur ipsum praesentium voluptas! Odio eum doloribus earum, nostrum ducimus magnam voluptate minima deleniti accusamus aliquam vero harum vel voluptatem. Iste et ipsam laborum enim possimus, quaerat necessitatibus repudiandae. Ab modi repellat distinctio odio. Ratione dolor maxime aliquid officiis, voluptates dolore eveniet aspernatur nostrum itaque sapiente modi mollitia nobis nesciunt voluptatem perferendis natus sed reiciendis quia! Et odio necessitatibus quisquam iure veritatis expedita voluptatibus consectetur explicabo rerum dolorem sit velit eos voluptatem vel error ullam non ab at ipsa, iusto perspiciatis nesciunt. Minima illo ab sequi alias corrupti laudantium eveniet doloribus ducimus maxime.
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, 
 onMounted} from 'vue'

export default {
  name: 'Home',
  components: {
    // Navbar
  },
  setup(){
    const paintings = reactive({})

    onMounted(() => {
      fetch("http://localhost/wp-lidia/wp-json/wp/v2/media/9")
      // fetch("http://localhost/wp-lidia/wp-json/wp/v2/posts?_embed")
            .then((res) => res.json())
            .then((res) => {
              paintings.data = res;
              console.log('data :>> ', paintings.data );
            });
    })

    return {paintings}
  },
}
</script>
