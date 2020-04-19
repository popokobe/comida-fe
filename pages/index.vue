<template>
  <div>
    <PostList />
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
  async asyncData({ store }) {
    await store.dispatch('post/setPost')
  }
}
</script>
