<template>
  <v-app>
      <v-app-bar
        color="deep-purple"
        dark
      >

        <v-app-bar-nav-icon v-if="isUserLogin" @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Vue2 Msal
        <span style="font-size: 12px;color: #bbbbbb">(Microsoft Authentication Library)</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu
          rounded="md"
          v-if="!isUserLogin"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              color="deep-purple accent-4"
              class="white--text ma-5"
              v-bind="attrs"
              v-on="on"
            >
              Sign Up Free
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              @click="loginWithPopup"
            >
              <v-list-item-title>With Popup</v-list-item-title>
            </v-list-item>

            <v-list-item
            @click="loginWithRedirect"
            >
              <v-list-item-title>With Redirect</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn v-else @click="logout">Logout</v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <v-btn color="red">login</v-btn>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      group: null,
      isUserLogin: false
    }
  },
  mounted() {
    this.isUserLogin = this.$msal.isAuth()
  },
  methods: {
    loginWithPopup() {
      this.$msal.loginPopup().then(() => {
        window.location.href = '/'
      })
    },
    loginWithRedirect() {
      const loginRequest = {
        scopes: ["User.ReadWrite"],
      };
      this.$msal.loginRedirect(loginRequest)
    },
    logout() {
      this.$msal.logoutPopup().then(() => {
        window.location.href = '/'
      })
    }
  }
};
</script>
