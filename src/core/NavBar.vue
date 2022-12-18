<template>
  <nav>
    <v-toolbar elevation="0" height="70" class="accent">
      <v-container class="py-0 d-flex justify-center nav-container">
        <v-toolbar-title>
          <img
            class="logo-img"
            :src="require('@/assets/logo.png')"
            alt="logo"
          />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-item">
          <v-btn
            v-for="link in links.beforeLogin"
            :key="link.text"
            small
            text
            :to="link.to"
            class="font-weight-medium mr-5"
            >{{ link.text }}</v-btn
          >
          <div class="d-flex align-center justify-center">
            <img src="../assets/Bag.png" height="20" alt="Bag" />
          </div>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          class="appbar-icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-toolbar>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      right
      disable-resize-watcher
    >
      <v-list dense>
        <v-list-item link v-for="link in links.beforeLogin" :key="link.text">
          <v-list-item-content>
            <v-btn small text :to="link.to" class="font-weight-medium">{{
              link.text
            }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  name: "NavBar",
  data: () => ({
    links: {
      beforeLogin: [
        { to: "/", text: "Home" },
        { to: "/menu", text: "Menu" },
        { to: "/service", text: "Service" },
        { to: "/login", text: "Sign In" },
      ],
    },
    drawer: false,
  }),
};
</script>


<style scoped>
.logo-img {
  height: 42px;
}

.v-btn:before {
  background-color: transparent;
}

.v-btn {
  text-transform: unset !important;
  font-size: 0.85rem !important;
  color: grey;
}

.underline {
  width: 1rem;
  border-bottom: 0.1rem solid black;
}

.v-btn--active,
.v-btn:hover {
  color: black;
}

.appbar-icon {
  display: none;
}

@media screen and (max-width: 900px) {
  .logo-img {
    height: 42px;
  }

  .toolbar-item {
    display: none;
  }

  .appbar-icon {
    display: initial;
  }
}
</style>

