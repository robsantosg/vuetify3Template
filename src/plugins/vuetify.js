/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

//  import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VCard: {
      style: 'box-shadow:  0px 0px 15px 4px rgba(61,61,61,0.1); border-radius:10px; ',
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1ABC9C',/*#1867C0',*/
          secondary: '#5CBBF6',
        },
      },
      dark: {
        colors: {
          primary: '#1ABC9C',/*#1867C0',*/
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
