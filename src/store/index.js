import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    add(state) {
      state.count++
    },
  },
})

export default store
