<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q5"
        textTitle="คุณอยากพัฒนาสกิลภาษาอังกฤษสกิลไหนมากที่สุด?"
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
          @click="goToQuestion6"
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
  name: "QuestionPage4",
  components: {
    BaseButton,
    QuestionTemplate,
    StepTemplate,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let choiceSelected = store.state.ans5.index;
    let saveAns5 = store.state.ans5;
    const step = store.state.step;
    const list = [
      { index: 0, text: "การฟัง", point: 20 },
      {
        index: 1,
        text: "การพูด",
        point: 10,
      },
      {
        index: 2,
        text: "การเขียน",
        point: 30,
      },
    ];
    const getAns = (returnAns: object) => {
      saveAns5 = returnAns;
    };

    const goToBackPage = () => {
      store.commit("reduceStep");
      router.push({ name: "QuestionPage4" });
    };

    const goToQuestion6 = () => {
      if (Object.keys(saveAns5).length !== 0) {
        store.commit("updateAns5", saveAns5);
        store.commit("addStep");
        router.push({ name: "QuestionPage6" });
      }
    };

    return {
      getAns,
      goToBackPage,
      goToQuestion6,
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
