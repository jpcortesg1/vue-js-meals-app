import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue";
import MealsByName from "./../views/MealsByName.vue";
import MealsByIngredient from "./../views/MealsByIngredient.vue";
import MealsByLetter from "./../views/MealsByLetter.vue";

import DefaultLayout from "./../layouts/DefaultLayout.vue";
import GuestLayout from "./../layouts/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
