<template>
  <v-row justify="center">
    <v-btn color="error" small dark @click.stop="dialog = true">
      削除
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">投稿を削除しますか？</v-card-title>

        <v-card-text>
          一度削除した投稿は元に戻せません
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            閉じる
          </v-btn>

          <v-btn color="green darken-1" text @click="deletePost">
            削除
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch('post/deletePost', {
        currentIndex: this.currentIndex,
        currentPostId: this.$store.state.post.post[this.currentIndex].id
      })
      this.dialog = false
    }
  }
}
</script>
