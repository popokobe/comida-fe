<template>
  <v-container>
    <v-row>
      <v-col v-for="(post, index) in posts" :key="index">
        <PostListItem :current-index="index" :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import PostListItem from '@/components/PostListItem'
export default {
  components: {
    PostListItem
  },
  computed: {
    ...mapGetters({
      posts: 'post/getPost'
    })
  }
}
</script>
