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
    submitPost() {
      const requestItem = new FormData()
      requestItem.append('author', this.$store.state.auth.user.id)
      requestItem.append('img', this.img)
      requestItem.append('name', this.name)
      requestItem.append('area', this.area)
      requestItem.append('category', this.category)
      requestItem.append('expense', this.expense)
      requestItem.append('dish', this.dish)
      requestItem.append('address', this.address)
      requestItem.append('rating', this.rating)
      requestItem.append('note', this.note)

      this.$store.dispatch('post/addPost', requestItem)
      this.dialog = false
    }
  }
}
</script>
