<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        class="mx-2"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <PostListItem :post="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostListItem from '@/components/PostListItem'
export default {
  components: {
    PostListItem
  },
  props: {
    items: {
      type: Object
    }
  }
}
</script>
