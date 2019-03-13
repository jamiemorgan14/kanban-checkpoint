import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: [],
    tasks: {},
    activeBoard: {},
    activeList: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveList(state, data) {
      state.activeList = data
    },
    setLists(state, data) {
      state.lists = data
    },
    setTasks(state, data) {
      // state.tasks[data.listId] = data.tasks
      Vue.set(state.tasks, data.listId, data.tasks)
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    logOut({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          router.push({ name: 'login' })
        })
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },

    getLists({ commit, dispatch }, payload) {
      api.get('boards/' + payload + '/lists')
        .then(res => {
          commit('setLists', res.data)
        })
    },
    addList({ commit, dispatch }, payload) {
      api.post('boards/' + payload.boardId + '/lists', payload)
        .then(res => {
          dispatch('getLists', payload.boardId)
        })
    },
    getTasks({ commit, dispatch }, payload) {
      api.get('boards/' + payload.boardId + '/lists/' + (payload._id || payload.listId) + '/tasks')
        .then(res => {
          commit('setTasks', { tasks: res.data, listId: payload._id || payload.listId })
        })
    },
    getTaskUpdate({ commit, dispatch }, payload) {
      api.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
        .then(res => {
          commit('setTasks', { tasks: res.data, listId: payload.listId })
        })
    },

    makeTask({ commit, dispatch }, payload) {
      api.post('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks', payload)
        .then(res => {
          dispatch('getTasks', payload)
        })
    },
    deleteList({ commit, dispatch }, payload) {
      api.delete('boards/' + payload.boardId + '/lists/' + payload._id)
        .then(res => {
          dispatch('getLists')
        })
    },
    editTask({ commit, dispatch }, payload) {
      api.put('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload._id, payload)
        .then(res => {
          dispatch('getTaskUpdate', payload)
        })
    }
    // getList
    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
