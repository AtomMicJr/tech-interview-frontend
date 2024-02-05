<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q6"
        textTitle="อยากเรียนภาษาอังกฤษ แต่..."
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
          @click="goToQuestion7"
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
  name: "QuestionPage6",
  components: {
    BaseButton,
    QuestionTemplate,
    StepTemplate,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    let choiceSelected = store.state.ans6.index;
    let saveAns6 = store.state.ans6;
    const step = store.state.step;
    const list = [
      { index: 0, text: "ไม่มีเวลา", point: 20 },
      {
        index: 1,
        text: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก",
        point: 10,
      },
      {
        index: 2,
        text: "ไม่มั่นใจ",
        point: 30,
      },
    ];
    const getAns = (returnAns: object) => {
      saveAns6 = returnAns;
      store.commit("updateAns6", saveAns6);
    };

    const goToBackPage = () => {
      store.commit("reduceStep");
      router.push({ name: "QuestionPage5" });
    };

    const goToQuestion7 = () => {
      if (Object.keys(saveAns6).length !== 0) {
        store.commit("addStep");
        router.push({ name: "QuestionPage7" });
      }
    };

    return {
      getAns,
      goToBackPage,
      goToQuestion7,
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
