<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="indigo" fab dark fixed bottom right v-on="on"
          ><v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">お店を追加</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  ref="file"
                  label="写真を追加"
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
          <v-btn color="blue darken-1" text @click="submitPost">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const reader = new FileReader()

export default {
  async asyncData({ $axios }) {
    const endpoint = '/api/v0/categories/'
    const res = await $axios.$get(endpoint)

    return {
      categories: res.category
    }
  },
  data() {
    return {
      dialog: false,
      img: '',
      name: 'テスト',
      area: 'テスト',
      category: 'FA',
      expense: 1000,
      dish: 'テスト',
      rating: 3,
      address: 'テスト',
      note: 'テスト'
    }
  },
  methods: {
    handleFileUpload(e) {
      reader.readAsDataURL(e)
      this.img = e
    },
    async submitPost() {
      const params = new FormData()
      params.append('author_id', 1)
      params.append('img', this.img)
      params.append('name', this.name)
      params.append('area', this.area)
      params.append('category', this.category)
      params.append('expense', this.expense)
      params.append('dish', this.dish)
      params.append('address', this.address)
      params.append('rating', this.rating)
      params.append('note', this.note)

      const endpoint = '/api/v0/posts/'
      await this.$axios.$post(endpoint, params).then((res) => {
        console.log(res)
        const newPost = res
        this.$store.dispatch('addPost', newPost)
        this.dialog = false
      })
    }
  }
}
</script>
