<template>
  <v-app id="comida">
    <NavigationDrawer />
    <NavigationBar />

    <v-content>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
      <Footer />
    </v-content>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="snackbar.text + Math.random()"
      :value="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
      @input="removeSnackbar(snackbar)"
    >
      {{ snackbar.text }}

      <v-btn text @click="removeSnackbar(snackbar)">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import NavigationDrawer from '@/components/NavigationDrawer'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavigationDrawer,
    NavigationBar,
    Footer
  },
  computed: {
    ...mapState({
      snackbars: (state) => state.snackbar.snackbars
    })
  },
  methods: {
    removeSnackbar(snackbar) {
      this.$store.dispatch('snackbar/remove', snackbar)
    }
  }
}
</script>
