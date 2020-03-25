<template>
  <v-container>
    <UserAuthForm
      button-text="Register"
      :submit-form="register"
      has-name="true"
    />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    async register(registrationInfo) {
      try {
        await this.$axios.post('auth/register/', registrationInfo)

        await this.$auth.loginWith('local', {
          data: registrationInfo
        })
        this.$store.dispatch('snackbar/create', {
          text: '登録ありがとうございます'
        })
        this.$router.push('/')
      } catch (error) {
        this.$store.dispatch('snackbar/create', {
          text: '登録内容に不備があります。もう一度お試しください。',
          color: 'red'
        })
      }
    }
  }
}
</script>
