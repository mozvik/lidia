import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'categories',
  state: () =>({ categoriesResults: [] }),
  getters: {
    categoriesCount: state => state.categoriesResults.length,
  },
  actions: {
    async getCategories() {
      fetch("http://localhost/wp-lidia/wp-json/wp/v2/categories")
      // fetch("http://localhost/wp-lidia/wp-json/wp/v2/media/9")
    // fetch("http://localhost/wp-lidia/wp-json/wp/v2/posts?_embed")
          .then((res) => res.json())
          .then((res) => {
            // paintings.data = res;
            
            this.categoriesResults.push(...res);
            console.log('pinia :>> ', this.categoriesResults);
          });
    }
    
  }
})