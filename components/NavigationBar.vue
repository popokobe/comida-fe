<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-app-bar-nav-icon @click.stop="$store.dispatch('showDrawer')" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <v-btn href="/" text>comida</v-btn>
    </v-toolbar-title>
    <v-text-field
      v-if="$auth.loggedIn"
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="検索"
      class="hidden-sm-and-down"
    />
    <v-spacer />
    <v-btn v-if="!$auth.loggedIn" href="/login" text>
      <v-icon>mdi-account</v-icon>
      ログイン
    </v-btn>
    <v-btn v-if="!$auth.loggedIn" href="/register" text>
      <v-icon>mdi-account-circle</v-icon>
      登録
    </v-btn>
    <v-btn v-if="$auth.loggedIn" href="/myaccount" text>
      <v-icon>mdi-account</v-icon>
      マイページ
    </v-btn>
    <v-btn v-if="$auth.loggedIn" href="/" text @click="logout">
      <v-icon>mdi-logout</v-icon>
      ログアウト
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
