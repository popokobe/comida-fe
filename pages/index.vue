<template>
  <div class="index">
    <h1>とりあえずテスト</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const endpoint = 'api/v0/posts/1'
    const response = await $axios.$get(endpoint)
    return {
      data: response
    }
  }
}
</script>
