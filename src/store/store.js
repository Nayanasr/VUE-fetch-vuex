import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      usersData: [],
    };
  },
  mutations: {
    fetchUsers(state, payload) {
      state.usersData = payload;
      console.log("state", state);
    },
  },
  actions: {
    async fetchUsers(context) {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      console.log("userdata", data);
      context.commit("fetchUsers", data);
    },
  },
});

export default store;