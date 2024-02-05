<template>
  <div class="question-style">
    <div>
      <step-template class="step-style" :currentStep="step" />
      <question-template
        numberQ="Q7"
        textTitle="คุณรู้จัก Globish ผ่านช่องทางใด(เลือกได้มากกว่า 1 ข้อ)"
        @return-ans="getAns"
        :list="list"
        :multi-selected="choiceSelected"
        Choice-type="checkbox"
        @return-text-other="setTextOther"
        :textAnsOther="textOther"
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
          @click="goToResult"
          text="ดูผลลัพธ์"
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
import { choiceDetail } from "@/types/list";

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
    let choiceSelected = store.state.ans7;
    let textOther = store.state.ansOther7;
    let saveAns7 = store.state.ans7;
    const step = store.state.step;
    const list = [
      { index: 0, text: "Instagram" },
      {
        index: 1,
        text: "Facebook",
      },
      {
        index: 2,
        text: "อื่นๆ (โปรดระบุ)",
      },
    ];
    const getAns = (returnAns: object) => {
      saveAns7 = returnAns;
      store.commit("updateAns7", saveAns7);
    };

    const goToBackPage = () => {
      store.commit("reduceStep");
      router.push({ name: "QuestionPage6" });
    };

    const setTextOther = (value: string) => {
      textOther = value;
      store.commit("updateTextAns7", value);
    };

    const goToResult = () => {
      if (saveAns7.length > 0) {
        if (saveAns7.findIndex((e: choiceDetail) => e.index === 2) !== -1) {
          if (textOther !== "") {
            router.push({ name: "ResultPage" });
          }
        } else {
          router.push({ name: "ResultPage" });
        }
      }
    };

    return {
      getAns,
      goToBackPage,
      goToResult,
      textOther,
      setTextOther,
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
