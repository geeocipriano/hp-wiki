<template>
  <v-app id="inspire" theme="dark" >
    <v-navigation-drawer v-model="drawer">
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar theme="dark">
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Application</v-toolbar-title> -->
    </v-app-bar>

    <v-main>
      <!-- <Characters /> -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script >
import SideBar from "./components/SideBar.vue";
import Characters from "./components/Characters.vue";
import { RouterView } from "vue-router";
export default {
  data: () => ({ drawer: null }),
  components: {
    SideBar,
    Characters,
    RouterView
  }
}
</script>
