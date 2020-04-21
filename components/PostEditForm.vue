<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" small dark v-on="on">編集</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">お店を編集</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  ref="file"
                  label="写真を変更"
                  accept="image/*"
                  filled
                  prepend-icon="mdi-camera"
                  @change="handleFileUpload"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="name" label="お店の名前"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field v-model="area" label="エリア"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <!-- <v-autocomplete
                  v-model="category"
                  :items="categories"
                  label="カテゴリ"
                  multiple
                ></v-autocomplete> -->
                <v-text-field
                  v-model="category"
                  label="カテゴリ"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field v-model="expense" label="予算"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dish" label="料理名"></v-text-field>
              </v-col>
              <v-col cols="12">
                <span>評価</span>
                <v-rating v-model="rating" />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="address" label="住所"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="note"
                  outlined
                  label="メモ"
                  hint="気になったことを書いてみよう！"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >閉じる</v-btn
          >
          <v-btn color="blue darken-1" text @click="updatePost">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const reader = new FileReader()

export default {
  props: {
    currentIndex: {
      type: Number
    }
  },
  data() {
    return {
      dialog: false,
      img: null
    }
  },
  computed: {
    name: {
      get() {
        return this.$store.state.post.post[this.currentIndex].name
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'name',
          value
        })
      }
    },
    area: {
      get() {
        return this.$store.state.post.post[this.currentIndex].area
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'area',
          value
        })
      }
    },
    category: {
      get() {
        return this.$store.state.post.post[this.currentIndex].category
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'category',
          value
        })
      }
    },
    expense: {
      get() {
        return this.$store.state.post.post[this.currentIndex].expense
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'expense',
          value
        })
      }
    },
    dish: {
      get() {
        return this.$store.state.post.post[this.currentIndex].dish
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'dish',
          value
        })
      }
    },
    rating: {
      get() {
        return this.$store.state.post.post[this.currentIndex].rating
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'rating',
          value
        })
      }
    },
    address: {
      get() {
        return this.$store.state.post.post[this.currentIndex].address
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'address',
          value
        })
      }
    },
    note: {
      get() {
        return this.$store.state.post.post[this.currentIndex].note
      },
      set(value) {
        this.$store.commit('post/updatePost', {
          currentIndex: this.currentIndex,
          key: 'note',
          value
        })
      }
    }
  },
  methods: {
    handleFileUpload(e) {
      reader.readAsDataURL(e)
      this.img = e
    },
    updatePost() {
      const requestItem = new FormData()
      requestItem.append('author', this.$store.state.auth.user.id)
      requestItem.append('img', this.img)
      requestItem.append(
        'name',
        this.$store.state.post.post[this.currentIndex].name
      )
      requestItem.append(
        'area',
        this.$store.state.post.post[this.currentIndex].area
      )
      requestItem.append(
        'category',
        this.$store.state.post.post[this.currentIndex].category
      )
      requestItem.append(
        'expense',
        this.$store.state.post.post[this.currentIndex].expense
      )
      requestItem.append(
        'dish',
        this.$store.state.post.post[this.currentIndex].dish
      )
      requestItem.append(
        'address',
        this.$store.state.post.post[this.currentIndex].address
      )
      requestItem.append(
        'rating',
        this.$store.state.post.post[this.currentIndex].rating
      )
      requestItem.append(
        'note',
        this.$store.state.post.post[this.currentIndex].note
      )

      this.$store.dispatch('post/updatePost', {
        currentIndex: this.currentIndex,
        currentPostId: this.$store.state.post.post[this.currentIndex].id,
        requestItem
      })
      this.dialog = false
    }
  }
}
</script>
