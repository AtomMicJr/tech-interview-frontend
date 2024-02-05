import { createStore } from "vuex";

export default createStore({
  state: {
    ans1: {},
    ans2: {},
    ans3: {},
    ans4: {},
    ans5: {},
    ans6: {},
    ans7: [],
    ansOther7: "",
    step: 1,
  },
  mutations: {
    updateAns1(state, value) {
      state.ans1 = value;
    },
    updateAns2(state, value) {
      state.ans2 = value;
    },
    updateAns3(state, value) {
      state.ans3 = value;
    },
    updateAns4(state, value) {
      state.ans4 = value;
    },
    updateAns5(state, value) {
      state.ans5 = value;
    },
    updateAns6(state, value) {
      state.ans6 = value;
    },
    updateAns7(state, value) {
      state.ans7 = value;
    },
    updateTextAns7(state, value) {
      state.ansOther7 = value;
    },
    resetAllAns(state) {
      state.ans1 = {};
      state.ans2 = {};
      state.ans3 = {};
      state.ans4 = {};
      state.ans5 = {};
      state.ans6 = {};
      state.ans7 = [];
      state.ansOther7 = "";
    },
    addStep(state) {
      state.step = state.step + 1;
    },
    reduceStep(state) {
      state.step = state.step - 1;
    },
  },
});
