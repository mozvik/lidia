import { defineStore } from 'pinia'

export const useLocaleStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'locale',
  state: () => ({
    currentLanguage: 'eng',
    imageMetadata: [],
    categories: [{
      id: 0,
      count: -1,
      description: '',
      link: '',
      name: 'All'
    }],
    menuItems: [{
      name_eng: 'Home',
      name_ita: 'Home',
      name_hun: 'Főoldal',
      link: '/',
    }, {
      name_eng: 'About',
      name_ita: 'Chi sono',
      name_hun: 'Rólam',
      link: '/about',
      }, {
      name_eng: 'Gallery',
      name_ita: 'Galleria',
      name_hun: 'Galéria',
      link: '/gallery',
      }, {
      name_eng: 'Contact',
      name_ita: 'Contatti',
      name_hun: 'Kapcsolat',
      link: '/contact',
    }
    ],
    
    home: [{
      subtitle_eng: 'Artist, Fontanafredda',
      subtitle_ita: 'Pittore, Fontanafredda',
      subtitle_hun: 'Festőművész, Fontanafredda',
    },{
      buttonText_eng: 'View Gallery',
      buttonText_ita: 'Vedi Galleria',
      buttonText_hun: 'Galéria',
    },

    ],
    about: [{
      subtitle_eng: 'About Me',
      subtitle_ita: 'Chi Sono',
      subtitle_hun: 'Rólam',
    },{
      breadcumbHome_eng: 'Home',
      breadcumbHome_ita: 'Home',
      breadcumbHome_hun: 'Főoldal',
      },
      {
      text1_eng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi. Hic aut esse praesentium excepturi, accusamus id repellat aliquid ea, commodi ducimus porro! Fuga architecto labore accusamus in quasi odio?',
      text1_ita: "Sono quattro ore che stiamo parlando di tagliatelle: ho afferreto benissimo m'hai rotto le pelle va bene. Ti spezzo i menischi i cinque della difesa vanno avanti i cinque attaccanti retrocedono; ti protegge la Madonna dell'Incoronéta!",
      text1_hun: 'A „beső belenség” a fémengedben is ficet, hogy a létő taróni lyukradt köklijét a szívós hutély mettősben egyves szitka ványolja. Így aztán a csemedv után fekedi a polást, az egzes liturkuszot, majd a hatos polvadt kodást vélkedi nyolc kedés radt nyításra.',
      },
      {
      text2_eng: "Dolor quibusdam beatae reprehenderit eius minus ducimus exercitationem deleniti ad recusandae veritatis, modi distinctio quae repellendus soluta libero veniam eveniet eum iste enim molestiae vitae aliquam vero qui. Expedita, dolores. Excepturi voluptas veritatis cumque rem quisquam, expedita quos ipsam minus eligendi quia officia.",
      text2_ita: "Terrone maledetto uno che a quarantott'anni viene a Rio a farsi fa l'appendicite: un caffè con utopia.",
      text2_hun: 'Mindeközben solt egy gulkás rodást, majd a már gyenséges karátlatos uramot, ahol 1988-ban lajnál. Sőt még egy levelyes enedői és poszmanikái s egy rulagtan talan és seretlen hadéra is van fugattyúja.',
      },
      {
      text3_eng: "Quod perferendis corrupti velit sint voluptate animi, necessitatibus officia aut itaque autem dignissimos similique? Eos, qui dignissimos.",
      text3_ita: "Gli attivi i passivi e i riflessivi, sono una persona che gira i mari di tutto il mondo lei è un cornuto lo sa. Perdere e perderemo: sono 2 giorni che non mangio zio Lino di che sesso sono le tartarughe.",
      text3_hun: '„Még nem volt meg a huszán, de már vilésnek ködöstek” - teszt ma is sebresztes hozása könnyíténéről.',
      }

    ],
    gallery: [{
      subtitle_eng: 'My Works',
      subtitle_ita: 'Il mio Lavoro',
      subtitle_hun: 'Munkáim',
    },{
      breadcumbHome_eng: 'Home',
      breadcumbHome_ita: 'Home',
      breadcumbHome_hun: 'Főoldal',
      },{
      breadcumbGallery_eng: 'Gallery',
      breadcumbGallery_ita: 'Galleria',
      breadcumbGallery_hun: 'Galéria',
      },
      {
      categories_eng: 'Categories',
      categories_ita: 'Categorie',
      categories_hun: 'Kategóriák',
        },
      
      {
      text1_eng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi. Hic aut esse praesentium excepturi, accusamus id repellat aliquid ea, commodi ducimus porro! Fuga architecto labore accusamus in quasi odio?',
      text1_ita: "Sono quattro ore che stiamo parlando di tagliatelle: ho afferreto benissimo m'hai rotto le pelle va bene. Ti spezzo i menischi i cinque della difesa vanno avanti i cinque attaccanti retrocedono; ti protegge la Madonna dell'Incoronéta!",
      text1_hun: 'A „beső belenség” a fémengedben is ficet, hogy a létő taróni lyukradt köklijét a szívós hutély mettősben egyves szitka ványolja. Így aztán a csemedv után fekedi a polást, az egzes liturkuszot, majd a hatos polvadt kodást vélkedi nyolc kedés radt nyításra.',
      },
      {
      text2_eng: "Dolor quibusdam beatae reprehenderit eius minus ducimus exercitationem deleniti ad recusandae veritatis, modi distinctio quae repellendus soluta libero veniam eveniet eum iste enim molestiae vitae aliquam vero qui. Expedita, dolores. Excepturi voluptas veritatis cumque rem quisquam, expedita quos ipsam minus eligendi quia officia.",
      text2_ita: "Terrone maledetto uno che a quarantott'anni viene a Rio a farsi fa l'appendicite: un caffè con utopia.",
      text2_hun: 'Mindeközben solt egy gulkás rodást, majd a már gyenséges karátlatos uramot, ahol 1988-ban lajnál. Sőt még egy levelyes enedői és poszmanikái s egy rulagtan talan és seretlen hadéra is van fugattyúja.',
      },
      {
      text3_eng: "Quod perferendis corrupti velit sint voluptate animi, necessitatibus officia aut itaque autem dignissimos similique? Eos, qui dignissimos.",
      text3_ita: "Gli attivi i passivi e i riflessivi, sono una persona che gira i mari di tutto il mondo lei è un cornuto lo sa. Perdere e perderemo: sono 2 giorni che non mangio zio Lino di che sesso sono le tartarughe.",
      text3_hun: '„Még nem volt meg a huszán, de már vilésnek ködöstek” - teszt ma is sebresztes hozása könnyíténéről.',
      }

    ],
    contact: [{
      subtitle_eng: 'Get In Touch',
      subtitle_ita: 'mettersi in contatto',
      subtitle_hun: 'Lépjen kapcsolatba velem',
    },{
      breadcumbHome_eng: 'Home',
      breadcumbHome_ita: 'Home',
      breadcumbHome_hun: 'Főoldal',
      },{
      breadcumbContact_eng: 'Contact me',
      breadcumbContact_ita: 'Contatto',
      breadcumbContact_hun: 'Kapcsolat',
      },
      {
      sendButton_eng: 'Send Message',
      sendButton_ita: 'Invia messaggio',
      sendButton_hun: 'Üzenet Küldése',
        },
      
      {
      name_eng: 'Name',
      name_ita: 'Nome',
      name_hun: 'Név',
      },
      {
      email_eng: "Email",
      email_ita: "Email",
      email_hun: 'Email',
      },
      {
      phone_eng: "Phone",
      phone_ita: "Telefono",
      phone_hun: 'Telefonszám',
      },
      {
      message_eng: "Message",
      message_ita: "Messaggio",
      message_hun: 'Üzenet',
      }

    ],
  }),
  getters: {
    activeLanguage: (state) => state.currentLanguage,
    imageCount: state => state.imageMetadata.length,
    menu: (state) => state.menuItems.map(item => {
      return {
        name: item['name_' + state.currentLanguage], link: item.link
      }
    }),
    localeCategories: (state) => {
      for (const cat of state.categories) {
        if (Object.prototype.hasOwnProperty.call(cat, 'acf')) {
          for (const key in cat.acf) {
            if (key.includes(state.currentLanguage)) {
              cat.name = cat.acf[key]
            }
          }
        }
      }
      
      switch (state.currentLanguage) {
        case 'eng':
          state.categories[0].name = 'All'
          break;
        case 'ita':
          state.categories[0].name = 'Tutti'
            break;
        case 'hun':
          state.categories[0].name = 'Összes'
          break;
        default:
          break;

      }
      return state.categories
    },
    imageText: (state) => {
      for (const image of state.imageMetadata) {
        if (Object.prototype.hasOwnProperty.call(image, 'acf')) {
          for (const key in image.acf) {
            if (key.includes(state.currentLanguage)) {
              image[key.slice(0, key.search('_'))] = image.acf[key]
            }
          }
        }
      }
      return state.imageMetadata
    }
  },
  actions: {
    changeLanguage(lang) {
      this.currentLanguage = lang;
    },
    changeContent(content) { 
      const obj = {}
      for (const item of content) {
        for (const key in item) {
          if (key.includes(this.currentLanguage)) {
            obj[key.slice(0, key.search('_'))] = item[key]
          }
        }
      }  
      return obj
    },
    async getCategories() {
      fetch(process.env.VUE_APP_API_URL + "/categories")
     // fetch("http://localhost/wp-lidia/wp-json/wp/v2/media/9")
     // fetch("http://localhost/wp-lidia/wp-json/wp/v2/posts?_embed")
          .then((res) => res.json())
          .then((res) => {
            this.categories.push(...res);
            //console.log('cats :>> ', this.categories);
          });
    },
    async getImages() {
      fetch(process.env.VUE_APP_API_URL + '/posts?_embed' )
      .then((res) => res.json())
      .then((res) => {
        this.imageMetadata.push(...res);
        //console.log('images :>> ', this.imageMetadata);
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