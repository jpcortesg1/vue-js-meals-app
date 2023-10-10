<template>
  <div class="flex flex-col items-center justify-center p-8">
    <div class="flex gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-if="meals.length === 0">
    <h3 class="text-center text-2xl">No Exist Meals...</h3>
    <h2 class="text-center text-xl">Try With Another Letter</h2>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import MealItem from "../components/MealItem.vue";
import store from "../store";

const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("fetchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("fetchMealsByLetter", route.params.letter);
});
</script>
