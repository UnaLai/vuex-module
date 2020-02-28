import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const member = {
  namespaced: true,
  state: {
    member: {
      id: "1"
    },
    memberList: []
  },
  mutations: {
    //命名為 member/memberSomeMutation
    memberSomeMutation(state) {
      console.log("memberSomeMutation", state);
    }
  },
  actions: {
    //命名為 member/memberSomeAction
    // memberSomeAction({ dispatch, commit }) {
    //   dispatch("orderSomeAction", null, { root: true });
    //   commit("orderSomeMutation", null, { root: true });
    // },
    //命名為 memberSomeAction
    memberSomeAction: {
      root: true,
      handler(context) {
        console.log("memberSomeAction", context);
      }
    }
  },
  getters: {
    //命名為 member/memberSomeGetter
    memberSomeGetter(state, getters, rootState, rootGetters) {
      console.log("memberSomeGetter", state, getters, rootState, rootGetters);
    }
  }
};
const order = {
  state: {
    order: {
      id: "123456"
    },
    orderList: []
  },
  mutations: {
    orderSomeMutation(state) {
      console.log("orderSomeMutation", state);
    }
  },
  actions: {
    orderSomeAction(context) {
      console.log("orderSomeAction", context);
      context.dispatch("memberSomeAction");
    }
  },
  getters: {
    orderSomeGetter(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters);
    }
  }
};
export default new Vuex.Store({
  modules: {
    member,
    order
  }
});
