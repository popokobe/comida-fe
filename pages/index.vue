<template>
  <PostList :items="$store.state.posts" />
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components: {
    PostList
  },
  async asyncData({ $axios, store }) {
    const endpoint = 'api/v0/posts'
    const res = await $axios.$get(endpoint)

    const posts = {}
    for (let i = 0; i < res.length; i++) {
      posts[`post${i}`] = res[i]
    }
    store.dispatch('setPosts', posts)
  },
  mounted() {
    console.log(this.$store.state.auth)
  }
}
</script>
