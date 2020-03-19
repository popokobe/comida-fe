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
    register() {
      alert('You pressed a button')
    }
  }
}
</script>
