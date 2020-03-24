<template>
  <v-app id="comida">
    <v-content>
      <NavigationDrawer />
      <NavigationBar />

      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavigationDrawer,
    NavigationBar,
    Footer
  }
}
</script>
