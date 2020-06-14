import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: [],
    showIdIndex: 0
  },

  mutations: {
    initData (state, info) {
      state.info = info;
    },

    deleteUser (state, id) {
      for (var i = 0; i < state.info.length; i++) {
        if (state.info[i].id == id) {
          state.info.splice(i, 1)
        }
      }
    },

    showUser (state, id) {
      for (var i = 0; i < state.info.length; i++) {
        if (state.info[i].id == id) {
          state.showIdIndex = i;
          break
        }
      }
    }
  },

  actions: {
    getData (context) {
      axios.get('https://akkadu-careers.s3.cn-north-1.amazonaws.com.cn/challenges/fe/data/json/users.json')
      .then((res) => {
        context.commit('initData', res.data)
      }, (err) => {
        console.log(err)
      })
    }
  },

  modules: {
  }
})
