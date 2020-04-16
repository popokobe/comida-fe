export const state = () => ({
  drawer: false,
  posts: []
})

export const getters = {
  getPosts(state) {
    return state.posts
  }
}

export const mutations = {
  showDrawer(state) {
    state.drawer = !state.drawer
  },
  setPosts(state, posts) {
    state.posts = posts
  },
  addPost(state, newPost) {
    state.posts.push(newPost)
  }
}

export const actions = {
  showDrawer(context) {
    context.commit('showDrawer')
  },
  setPosts(context, posts) {
    context.commit('setPosts', posts)
  },
  addPost(context, newPost) {
    context.commit('addPost', newPost)
  }
}
