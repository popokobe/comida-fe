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
  deletePost(state, payload) {
    state.post.splice(payload, 1)
  }
}

export const actions = {
  async setPost(context, state) {
    const endpoint = 'api/v0/posts'
    const post = await this.$axios.$get(endpoint)
    context.commit('setPost', post)
  },
  async addPost(context, payload) {
    const endpoint = 'api/v0/posts/'
    await this.$axios.$post(endpoint, payload).then((res) => {
      const newPost = res
      context.commit('addPost', newPost)
    })
  },
  async updatePost(context, { currentIndex, currentPostId, requestItem }) {
    const endpoint = 'api/v0/posts/' + currentPostId + '/'
    await this.$axios.$put(endpoint, requestItem).then((res) => {
      const updatedPost = res
      context.commit('deletePost', currentIndex)
      context.commit('addPost', updatedPost)
    })
  }
}
