import { GENERATE_RANDOM_HORSES } from '../../utils/helpers.js'

export default {
  namespaced: true,
  state: {
    horses: []
  },
  mutations: {
    GENERATE_HORSES(state) {
      state.horses = GENERATE_RANDOM_HORSES() || []
    }
  },
  actions: {},
  getters: {
    _GET_HORSES: state => state.horses ?? [],
    // NOTE: Vuex getters should be pure. `Array.sort()` mutates the array,
    // so we sort a copy to avoid state mutation.
    _GET_ORDERED_HORSES: state => [...(state.horses ?? [])].sort((a, b) => b.condition - a.condition)
  }
}

