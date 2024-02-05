<template>
  <div class="content">
    <div class="layout-btn">
      <base-button
        text="เริ่มเลย"
        color="yellow"
        @click="goToQuestion1()"
      ></base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    BaseButton,
  },
  setup() {
    const router = useRouter();

    const goToQuestion1 = () => {
      router.push({ name: "QuestionPage1" });
    };

    return {
      goToQuestion1,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  background-image: url("../assets/firstPage.svg");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 0;
}
.layout-btn {
  position: absolute;
  width: 316px;
  max-width: 720px;
  bottom: 85px;
}
</style>
