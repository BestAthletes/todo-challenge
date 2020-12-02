import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#053243',
        secondary: '#81BAED',
        anchor: '#005AA8',
        accent: '#FDB62F',
        error: '#C70000',
        info: '#FFE1B1',
        success: '#00AD68',
        warning: '#A6C100'
      },
    },
  },
});
