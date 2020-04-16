<template>
  <div>
    <PostList :items="getPosts" />
    <PostRegisterForm />
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostRegisterForm from '@/components/PostRegisterForm'

export default {
  components: {
    PostList,
    PostRegisterForm
  },
  async asyncData({ $axios, store }) {
    const endpoint = 'api/v0/posts'
    const posts = await $axios.$get(endpoint)
    store.dispatch('setPosts', posts)
  },
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    }
  }
}
</script>
