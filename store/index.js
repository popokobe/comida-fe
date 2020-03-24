export const state = () => ({
  drawer: true
})

export const mutations = {
  showDrawer(state) {
    state.drawer = !state.drawer
  },
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  showDrawer(context) {
    context.commit('showDrawer')
  },
  setPosts(context, posts) {
    context.commit('setPosts', posts)
  }
}
