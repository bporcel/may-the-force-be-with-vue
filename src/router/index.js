import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/view/Home.vue";
import People from "@/components/view/People.vue";
import Detail from "@/components/view/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
  {
    path: "/starships",
    name: "Starships",
    component: Home,
  },
  {
    path: "/planets",
    name: "Planets",
    component: Home,
  },
  {
    path: "/detail:id",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
