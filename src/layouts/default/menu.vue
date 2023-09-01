<template>
     <v-navigation-drawer 
    floating
    v-model="drawer"   
    >
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/84.jpg" title="Sandra Adams"
          subtitle="sandra_a88@gmail.com"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>

        <v-list-group v-for="i in menu" :key="i.id"   :value="i.text">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="i.icon" :title="i.text"></v-list-item>
            
          </template>
          <v-list-item
          v-for="j in i.submenu"
            :key="j.id"
            :title="j.text"
            :value="j.text"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
//import store from "../store";

export default {
  data: () => ({
    //initialDark: this.$vuetify ? this.$vuetify.theme.dark: true,
    goDark: false,
    drawer:true,

    menu: [
      {
        id: 1,
        icon: 'mdi-file-document-check-outline',
        text: 'Solicitudes',
        submenu: [
          { id: 11, text: "Administrar", ref: "dashboard" },
          { id: 12, text: "Nueva Solicitud", ref: "dashboard" }
        ]
        
      },
      {
        id: 2,
        icon: 'mdi-cash-multiple',
        text: 'Pagos',
        submenu: [
          { id: 21, text: "Registrar Pago", ref: "dashboard" }
        ]
      },
      {
        id: 3,
        icon: 'mdi-card-account-details',
        text: 'Cartera',

      }
      // {
      //   id: 1,
      //   icon: "analytics",
      //   "icon-alt": "analytics",
      //   text: "Dashboard",
      //   model: false,
      //   children: [
      //     { text: "Administrar", ref: "dashboard" }
      //   ],
      // },

    ],
  }),
  props: {
    source: String,
  },
  methods: {

  },
  created: function () {

  },
};
</script>