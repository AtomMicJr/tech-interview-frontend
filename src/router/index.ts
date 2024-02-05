import { createRouter, createWebHistory } from "vue-router";
import GetStart from "@/pages/GetStart.vue";
import Question1 from "@/pages/Question1.vue";
import Question2 from "@/pages/Question2.vue";
import Question3 from "@/pages/Question3.vue";
import Question4 from "@/pages/Question4.vue";
import Question5 from "@/pages/Question5.vue";
import Question6 from "@/pages/Question6.vue";
import Question7 from "@/pages/Question7.vue";
import Result from "@/pages/Result.vue";

const routes = [
  {
    path: "/",
    name: "GetStart",
    component: GetStart,
  },
  {
    path: "/q1",
    name: "QuestionPage1",
    component: Question1,
  },
  {
    path: "/q2",
    name: "QuestionPage2",
    component: Question2,
  },
  {
    path: "/q3",
    name: "QuestionPage3",
    component: Question3,
  },
  {
    path: "/q4",
    name: "QuestionPage4",
    component: Question4,
  },
  {
    path: "/q5",
    name: "QuestionPage5",
    component: Question5,
  },
  {
    path: "/q6",
    name: "QuestionPage6",
    component: Question6,
  },
  {
    path: "/q7",
    name: "QuestionPage7",
    component: Question7,
  },
  {
    path: "/result",
    name: "ResultPage",
    component: Result,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  if (_to.name !== "GetStart" && _from.name === undefined) {
    next({ name: "GetStart" });
  } else {
    next();
  }
});
export default router;
