<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="rounded bottom-2 border-gray-200 w-full text-center"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "./../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

const searchMeals = async () => {
  store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;

  if (keyword.value) {
    searchMeals();
  }
});
</script>
