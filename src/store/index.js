import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [
      {
        name: "予習",
        time: "30",
      },
    ]
  },
  mutations: {
    addItemToTask(state, payload) {
      state.task.push(payload);
    }
  }
})
