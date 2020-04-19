<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        class="mx-2"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
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
