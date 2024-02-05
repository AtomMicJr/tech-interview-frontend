<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q2"
        textTitle="คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?"
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
          @click="goToQuestion3"
          text="ต่อไป"
          color="yellow"
          style="width: 199px"
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
  name: "QuestionPage2",
  components: {
    BaseButton,
    QuestionTemplate,
    StepTemplate,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let choiceSelected = store.state.ans2.index;
    let saveAns2 = store.state.ans2;
    const step = store.state.step;

    const list = [
      { index: 0, text: "การทำงาน", point: 30 },
      { index: 1, text: "เที่ยวต่างประเทศ", point: 10 },
      { index: 2, text: "ใช้ในชีวิตประจำวัน", point: 20 },
    ];
    const getAns = (returnAns: object) => {
      saveAns2 = returnAns;
      store.commit("updateAns2", saveAns2);
    };

    const goToBackPage = () => {
      store.commit("reduceStep");
      router.push({ name: "QuestionPage1" });
    };

    const goToQuestion3 = () => {
      if (Object.keys(saveAns2).length !== 0) {
        store.commit("addStep");
        router.push({ name: "QuestionPage3" });
      }
    };

    return {
      getAns,
      goToBackPage,
      goToQuestion3,
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
