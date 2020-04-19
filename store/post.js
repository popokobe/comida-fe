export const state = () => ({
  post: []
})

export const getters = {
  getPostLength(state) {
    return state.post.length
  },
  getEachPost(state) {
    return state.post
  }
}

export const mutations = {
  setPost(state, payload) {
    state.post = payload
  }
}

export const actions = {
  async setPost(context) {
    const endpoint = 'api/v0/posts'
    const post = await this.$axios.$get(endpoint)
    const payload = post
    context.commit('setPost', payload)
  }
}
