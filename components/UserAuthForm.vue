<template>
  <v-form v-model="valid">
    <div @keydown.enter="submitForm(userInfo)">
      <v-text-field
        v-if="hasName"
        v-model="userInfo.username"
        label="Username"
      />

      <v-text-field v-model="userInfo.email" label="Email" />

      <v-text-field
        v-model="userInfo.password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        counter="true"
        @click:append="showPassword = !showPassword"
      />

      <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
        buttonText
      }}</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    submitForm: {
      type: Function,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    hasName: Boolean
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        username: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
