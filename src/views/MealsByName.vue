<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded bottom-2 border-gray-200 w-full text-center"
      placeholder="Search for Meals"
      v:model="keyword"
      @change="searchMeals"
    />
  </div>

  <div>
    <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <h3>{{ meal.strMeal }}</h3>
      <p
        :style="{
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        }"
      >
        {{ meal.strInstructions }}
      </p>
      <div>
        <a :href="meals.strYoutube" target="_blank">YouTube</a>
        <router-link to="/">View</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "./../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = async () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
