import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'categories',
  state: () =>({ data: [] }),
  getters: {
    categoriesCount: state => state.data.length,
  },
  actions: {
    async getCategories() {
      fetch("http://localhost/wp-lidia/wp-json/wp/v2/categories")
      // fetch("http://localhost/wp-lidia/wp-json/wp/v2/media/9")
    // fetch("http://localhost/wp-lidia/wp-json/wp/v2/posts?_embed")
          .then((res) => res.json())
          .then((res) => {
            this.data.push(...res);
            console.log('pinia :>> ', this.data);
          });
    }
    
  }
})