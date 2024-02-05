<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q1"
        textTitle="ถ้าวันนี้เป็นวันหยุด คุณจะ..."
        @return-ans="getAns"
        :list="list"
        :choiceSelected="choiceSelected"
      >
      </question-template>
      <div class="button">
        <base-button
          @click="goToBackPage"
          text="กลับ"
          color="white"
          style="width: 96px"
        ></base-button>
        <base-button
          text="ต่อไป"
          color="yellow"
          style="width: 199px"
          @click="goToQuestion2"
        ></base-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import QuestionTemplate from "@/components/QuestionTemplate.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "QuestionPage1",
  components: {
    BaseButton,
    QuestionTemplate,
    StepTemplate,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let choiceSelected = store.state.ans1.index;
    let saveAns1 = store.state.ans1;
    const step = store.state.step;
    const list = [
      { index: 0, text: "นอนเล่น พักผ่อน", point: 10 },
      { index: 1, text: "ดูหนัง ดูซีรี่ส์ เล่นเกม", point: 20 },
      { index: 2, text: "เรียนรู้อะไรใหม่ ๆ", point: 30 },
    ];
    const getAns = (returnAns: object) => {
      saveAns1 = returnAns;
      store.commit("updateAns1", saveAns1);
    };

    const goToBackPage = () => {
      store.commit("resetAllAns");
      router.push({ name: "GetStart" });
    };

    const goToQuestion2 = () => {
      if (Object.keys(saveAns1).length !== 0) {
        store.commit("addStep");
        router.push({ name: "QuestionPage2" });
      }
    };

    return {
      getAns,
      goToBackPage,
      goToQuestion2,
      list,
      choiceSelected,
      step,
    };
  },
});
</script>
<style lang="scss" scoped>
.question-style {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.button {
  margin-top: 82px;
  margin-inline: 35px;
  display: flex;
  justify-content: space-between;
}
.step-style {
  margin-inline: 32px;
  margin-bottom: 44px;
}
</style>
