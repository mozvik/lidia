import { defineStore } from 'pinia'


export const useGalleryStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'gallery',
  state: () => ({
    imageMetadata: [],
  }),
  getters: {
    imageCount: state => state.imageMetadata.length,
  },
  actions: {
    async getImages() {
      fetch(process.env.VUE_APP_API_URL + '/posts?_embed' )
      .then((res) => res.json())
      .then((res) => {
        this.imageMetadata.push(...res);
        console.log('images :>> ', this.imageMetadata);
        for (let i = 0; i < this.imageCount; i++) {
          if (this.imageMetadata[i].acf.photo != null) {
            fetch(process.env.VUE_APP_API_URL + '/media/' + this.imageMetadata[i].acf.photo)
            .then((res) => res.json())
              .then((res) => {
              this.imageMetadata[i].acf.full = res.guid.rendered
              this.imageMetadata[i].acf.thumbnail = res.media_details.sizes.medium_large.source_url
            });
          }
        }
      });
    }
  }
})