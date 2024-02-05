<template>
  <div>
    <button class="base-button" :class="returnColor()">
      <span class="text-content">{{ text }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    text: {
      default: "",
      type: String,
    },
    color: {
      default: "white",
      type: String,
    },
  },
  setup(props) {
    const returnColor = () => {
      return props.color.toLocaleLowerCase() === "white"
        ? "background-white"
        : "background-yellow";
    };

    return {
      returnColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  height: 40px;
  width: 100%;
  border: 1px $black-color solid;
  border-radius: 20px;
  padding: 4px;
  font-size: 20px;
}
.background-white {
  background-color: $white-color;
}
.background-yellow {
  background-color: $secondary-color;
}
.text-content {
  color: $black-color;
  font-weight: 500;
}
</style>
