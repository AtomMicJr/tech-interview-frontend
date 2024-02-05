<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q4"
        textTitle="คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?"
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
          @click="goToQuestion5"
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
    let choiceSelected = store.state.ans4.index;
    let saveAns4 = store.state.ans4;
    const step = store.state.step;
    const list = [
      { index: 0, text: "เป็นประจำทุกวัน", point: 30 },
      {
        index: 1,
        text: "เป็นบางครั้ง",
        point: 10,
      },
      {
        index: 2,
        text: "นาน ๆ ที / ไม่ได้ใช้เลย",
        point: 20,
      },
    ];
    const getAns = (returnAns: object) => {
      saveAns4 = returnAns;
      store.commit("updateAns4", saveAns4);
    };

    const goToBackPage = () => {
      store.commit("reduceStep");
      router.push({ name: "QuestionPage3" });
    };

    const goToQuestion5 = () => {
      if (Object.keys(saveAns4).length !== 0) {
        store.commit("addStep");
        router.push({ name: "QuestionPage5" });
      }
    };

    return {
      getAns,
      goToBackPage,
      goToQuestion5,
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
