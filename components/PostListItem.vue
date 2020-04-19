<template>
  <v-card min-width="300" tile>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- <v-carousel
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div>{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel> -->
          <v-carousel
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-img :src="`${post.img}`" aspect-ratio="1.2" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <div class="post-content">
            <p class="post-category">{{ post.category }}</p>
            <h2 class="post-name">{{ post.name }}</h2>
            <v-rating readonly :value="post.rating"></v-rating>
            <p class="post-area">{{ post.area }}</p>
            <p class="post-area">{{ post.dish }}</p>
            <p class="post-note">{{ post.note }}</p>
            <p class="post-expense">{{ post.expense }}</p>
            <PostEditForm :edit-post="post" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PostEditForm from '@/components/PostEditForm'

export default {
  components: {
    PostEditForm
  },
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>
