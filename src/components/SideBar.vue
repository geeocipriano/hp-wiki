<template>
  <v-card class="mx-auto" width="256" height="100vh">
    <v-layout>
      <v-navigation-drawer permanent absolute>
        <v-list>
          <v-list-item prepend-avatar="https://1000logos.net/wp-content/uploads/2021/04/Hogwarts-Logo.png"
            title="Harry Potter Wiki">
          </v-list-item>
        </v-list>

        <v-divider height="50px"></v-divider>

        <v-list :lines="false" density="compact" nav>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary" :to="item.route">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 354px;"></v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: "SideBar",
  data: () => ({
    selectedItem: 0,
    items: [
      { text: 'Home', icon: 'mdi-home', route: '/' },
      { text: 'Characters', icon: 'mdi-account-multiple', route: '/characters' },
      { text: 'Spells', icon: 'mdi-auto-fix', route: '/spells' },
    ],
  }),
}
</script>