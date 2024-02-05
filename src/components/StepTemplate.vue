<template>
  <div class="step-template">
    <div v-for="step in totalQuestion" :key="step">
      <div class="box-detail" :class="checkStep(step)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StepTemplate",
  props: {
    currentStep: {
      default: 1,
      type: Number,
    },
    totalQuestion: {
      default: 7,
      type: Number,
    },
  },
  setup(props) {
    const checkStep = (index: number) => {
      return props.currentStep < index ? "step-white" : "step-black";
    };
    return { checkStep };
  },
});
</script>

<style lang="scss" scoped>
.step-template {
  display: flex;
  justify-content: space-between;
}
.box-detail {
  width: 45.15px;
  height: 9px;
  border-radius: 4px;
}
.step-black {
  background-color: $step-select-color;
}
.step-white {
  background-color: $white-color;
}
</style>
