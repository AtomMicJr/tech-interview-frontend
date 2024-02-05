<template>
  <div class="question-template">
    <div class="number-question">
      {{ numberQ }}
    </div>
    <div class="title">
      <span>{{ textTitle }}</span>
    </div>
    <div>
      <div v-if="ChoiceType === 'radio'">
        <div v-for="(choice, i) in list" :key="i" class="card-choice">
          <label>
            <input
              v-model="selected"
              :value="choice.index"
              type="radio"
              :name="choice.text"
            />
            <span>{{ choice.text }}</span>
          </label>
        </div>
      </div>
      <div v-else>
        <div v-for="(choice, i) in list" :key="i" class="card-choice">
          <label>
            <input
              v-model="checkedList"
              :value="choice"
              type="checkbox"
              :name="choice.text"
            />
            <span>{{ choice.text }}</span>
          </label>
        </div>
        <div v-if="checkSelectOther" class="other-content">
          <input v-model="textOther" type="text" class="input-text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";

export default defineComponent({
  name: "QuestionTemplate",
  props: {
    numberQ: {
      default: "Q1",
      type: String,
    },
    textTitle: {
      default: "",
      type: String,
    },
    list: {
      default: () => [],
      type: Array,
    },
    choiceSelected: {
      default: -1,
      type: Number,
    },
    multiSelected: {
      default: () => [],
      type: Array,
    },
    ChoiceType: {
      default: "radio",
      type: String,
    },
    textAnsOther: {
      default: "",
      type: String,
    },
  },
  setup(props, { emit }) {
    let selected = ref(props.choiceSelected);
    const checkedList = ref(props.multiSelected);
    let textOther = ref(props.textAnsOther);

    const findAnsList = (index: number) => {
      return props.list[index];
    };

    const checkSelectOther = computed(() => {
      return checkedList.value.findIndex((e: any) => {
        return e.index === 2;
      }) <= -1
        ? false
        : true;
    });

    watch(selected, () => {
      emit("returnAns", findAnsList(selected.value));
    });

    watch(checkedList, () => {
      if (checkedList.value.findIndex((e: any) => e.index === 2) <= -1) {
        textOther.value = "";
      }
      emit("returnAns", checkedList.value);
    });

    watch(textOther, () => {
      emit("returnTextOther", textOther.value);
    });

    return {
      selected,
      checkedList,
      checkSelectOther,
      textOther,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.question-template {
  padding: 20px;
  width: 274px;
  max-height: 100%;
  background-color: $white-color;
  margin-inline: 35px;
  border-radius: 20px;
  border: 1px $black-color solid;
}
.number-question {
  font-family: "Gloria Hallelujah";
  color: $grey-color;
  font-size: 32px;
}
.title {
  font-weight: 700;
  margin-top: 10px;
  margin-inline: 7px;
  height: 52px;
}
input[type="radio"],
input[type="checkbox"] {
  height: 1px;
  position: absolute;
}
.card-choice {
  margin-block: 14.67px;
}

label span {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: $white-color;
  padding-inline: 26px;
  border-radius: 20px;
  border: 1px $choice-border-color solid;
  font-weight: 500;
  height: 72.13px;
}
input[type="radio"]:checked + span,
input[type="checkbox"]:checked + span {
  border: 1px $black-color solid;
  background-color: $primary-color;
}
.input-text {
  border-width: 0px 0px 1px;
  border-color: $black-color;
  background-color: $white-color;
  font-size: 16px;
  text-align: left;
  font-family: "IBM Plex Sans Thai";
  color: #bdbdbd;
  font-weight: 500;
  width: 90%;
  margin-bottom: 20px;
}
input:focus {
  outline: none;
}
.other-content {
  display: flex;
  justify-content: center;
}
</style>
