import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#70A43C',
            secondary: '#FEBD00',
            accent: '#F8FBF5',
            error: '#b71c1c',
          },
        },
      },    
});
