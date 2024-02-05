<template>
  <div class="result-style">
    <div class="content-template">
      <span class="text-result">ผลลัพธ์ของคุณคือ</span>
      <img :src="resultType" alt="" class="img-type" />
      <div class="text-detail">
        <p>คุณรู้จัก Globish ผ่าน</p>
        <p>{{ resultUserFollow }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { choiceDetail } from "@/types/list";

export default defineComponent({
  name: "ResultPage",
  setup() {
    const store = useStore();
    const totalPoint =
      store.state.ans1.point +
      store.state.ans2.point +
      store.state.ans3.point +
      store.state.ans4.point +
      store.state.ans5.point +
      store.state.ans6.point;
    const userFollow = store.state.ans7;
    userFollow.sort((a: choiceDetail, b: choiceDetail) => {
      return a.index - b.index;
    });

    const resultType = computed(() => {
      let pathImg = "";
      if (totalPoint >= 60 && totalPoint <= 90) {
        pathImg = require("@/assets/the_hobbyist.svg");
      } else if (totalPoint >= 91 && totalPoint <= 130) {
        pathImg = require("@/assets/the_enthusiastic.svg");
      } else if (totalPoint >= 131 && totalPoint <= 180) {
        pathImg = require("@/assets/the_gradual_learner.svg");
      }
      return pathImg;
    });

    const resultUserFollow = computed(() => {
      let text = "";
      userFollow.forEach((e: choiceDetail, i: number) => {
        if (e.index === 2) {
          text += store.state.ansOther7;
        } else {
          text += e.text;
        }

        if (userFollow.length - 1 > i) {
          text += ", ";
        }
      });
      return text;
    });

    return {
      resultType,
      resultUserFollow,
    };
  },
});
</script>

<style lang="scss" scoped>
.result-style {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.content-template {
  padding: 9px;
  width: 100%;
  max-height: 100%;
  background-color: $white-color;
  margin-inline: 9px;
  border-radius: 20px;
  border: 1px $black-color solid;
}
.text-result {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 19px;
}
.img-type {
  width: 100%;
  height: auto;
}
.text-detail {
  margin-block: 53px;
  font-size: 20px;
  font-weight: 700;
}
p {
  margin: 0;
}
</style>
