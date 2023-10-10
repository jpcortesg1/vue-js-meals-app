<template>
  <div class="p-8" v-if="meals.length <= 0">
    <h2 class="text-4xl font-bold mb-4">Ingredients</h2>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h4 class="text-xl font-semibold">{{ ingredient.strIngredient }}</h4>
      <p class="text-base">{{ ingredient.strDescription }}</p>
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

import MealItem from "../components/MealItem.vue";
import store from "../store";
import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";

const route = useRoute();
const ingredients = ref([]);
const meals = computed(() => store.state.mealsByIngredient);

watch(route, () => {
  store.dispatch("fetchMealsByIngredient", route.params.ingredient);
});

onMounted(async () => {
  const ingredient = route.params.ingredient;
  store.dispatch("fetchMealsByIngredient", ingredient);

  if (ingredient) return;

  const { data } = await axiosClient.get("/list.php?i=list");
  ingredients.value = data.meals;
});
</script>
