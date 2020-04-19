export const state = () => ({
  post: []
})

export const getters = {
  getPostLength(state) {
    return state.post.length
  },
  getPost(state) {
    return state.post
  }
}

export const mutations = {
  setPost(state, payload) {
    state.post = payload
  },
  addPost(state, payload) {
    state.post.push(payload)
  },
  updatePost(state, { currentIndex, key, value }) {
    state.post[currentIndex][key] = value
  },
  changePostStatus(state, currentIndex) {
    state.post[currentIndex].editable = !state.post[currentIndex].editable
  }
}

export const actions = {
  async setPost(context, state) {
    const endpoint = 'api/v0/posts'
    const post = await this.$axios.$get(endpoint, {
      params: {
        search: this.$auth.user.id
      }
    })
    context.commit('setPost', post)
  },
  async addPost(context, payload) {
    const endpoint = 'api/v0/posts/'
    await this.$axios.$post(endpoint, payload).then((res) => {
      const newPost = res
      context.commit('addPost', newPost)
    })
  }
}
