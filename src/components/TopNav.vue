<template>
  <div>
    <v-app-bar app dark>
      <v-toolbar-title>LazaKIL</v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text><v-icon class="mr-1">mdi-home</v-icon>Home</v-btn>
        <v-btn to="/store" text
          ><v-icon class="mr-1">mdi-storefront</v-icon>Store</v-btn
        >
        <v-btn to="/cart" text
          ><v-icon class="mr-1">mdi-cart</v-icon>Cart</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.name" :to="item.link">
          <v-list-item-icon>
            <v-icon small>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Store", link: "store", icon: "storefront" },
        { title: "Cart", link: "cart", icon: "cart" },
      ],
    };
  },
};
</script>

<style></style>
