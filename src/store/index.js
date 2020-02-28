import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const member = {
  state: {
    member: {
      id: "1"
    },
    memberList: []
  }
};
const order = {
  state: {
    order: {
      id: "123456"
    },
    orderList: []
  }
};
export default new Vuex.Store({
  modules: {
    member,
    order
  }
});
