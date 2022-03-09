import { defineStore } from 'pinia'


export const useGalleryStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'gallery',
  state: () => ({
    data: [],
  }),
  getters: {
    imageCount: state => state.data.length,
  },
  actions: {
    async getImages() {
      fetch(process.env.VUE_APP_API_URL + '/posts?_embed' )
      .then((res) => res.json())
      .then((res) => {
        this.data.push(...res);
        console.log('images :>> ', this.data);
        for (let i = 0; i < this.imageCount; i++) {
          if (this.data[i].acf.photo != null) {
            fetch(process.env.VUE_APP_API_URL + '/media/' + this.data[i].acf.photo)
            .then((res) => res.json())
              .then((res) => {
              this.data[i].acf.full = res.guid.rendered
              this.data[i].acf.thumbnail = res.media_details.sizes.medium_large.source_url
            });
          }
        }
      });
    }
  }
})