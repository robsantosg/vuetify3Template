<template>
  <v-theme-provider :theme="theme" with-background> <v-app>
      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item >
            <v-row>
              <v-col cols="4"><v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="drawer"></v-app-bar-nav-icon></v-col>
              <v-col cols="8"><v-img src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"  ></v-img></v-col>
            </v-row>
          </v-list-item>
            
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>

          <v-list-group v-for="i in menu" :key="i.id" :value="i.text">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :prepend-icon="i.icon" :title="i.text"></v-list-item>

            </template>
            <v-list-item v-for="j in i.submenu" :key="j.id" :title="j.text" :value="j.text" :to="j.ref"></v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-app-bar app fixed>
          <v-toolbar color="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>

            </v-toolbar-title>

            <v-spacer></v-spacer>


            <v-btn icon @click="changeTheme">
              <v-icon>mdi-lightbulb-on-20</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-send</v-icon>
            </v-btn>



            <v-menu min-width="200px" rounded>
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-avatar image="https://randomuser.me/api/portraits/men/84.jpg">
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <div class="mx-auto text-center">
                    <v-avatar size="large" image="https://randomuser.me/api/portraits/men/84.jpg">
                    </v-avatar>
                    <h3>Jhon Doe</h3>
                    <p class="text-caption mt-1">jhondoe@gmail.com</p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn variant="text"> Edit Account </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn rounded variant="text"> Disconnect </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>


          </v-toolbar>
        </v-app-bar>

        <v-container>
          <router-view />

        </v-container>
      </v-main>

    </v-app>
  </v-theme-provider>
</template>
 
<script>

export default {
  data: () => ({

    theme: 'light',
    drawer: true,

    menu: [
      {
        id: 1,
        icon: 'mdi-file-document-check-outline',
        text: 'Menu 1',
        submenu: [
          { id: 11, text: "Submenu 1", ref: "/" },
          { id: 12, text: "Submenu 2", ref: "page1" }
        ]

      },
      {
        id: 2,
        icon: 'mdi-cash-multiple',
        text: 'Menu 2',
        submenu: [
          { id: 21, text: "Submenu 1", ref: "/" }
        ]
      },
      {
        id: 3,
        icon: 'mdi-card-account-details',
        text: 'Menu 3',

      }
    ],
  }),
  props: {
    source: String,
  },
  methods: {
    changeTheme: function () {
      if (this.theme == 'light') {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    }

  },
  created: function () {

  },
};
</script>
