<template>
  <v-container>
    <UserAuthForm button-text="Login" :submit-form="login" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    login(loginInfo) {
      this.$auth.loginWith('local', {
        data: loginInfo
      })
    }
  }
}
</script>
