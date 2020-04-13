<template>
  <div>
    <PostList :items="$store.state.posts" />
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
    const res = await $axios.$get(endpoint)

    const posts = {}
    for (let i = 0; i < res.length; i++) {
      posts[`post${i}`] = res[i]
    }
    store.dispatch('setPosts', posts)
  }
}
</script>
