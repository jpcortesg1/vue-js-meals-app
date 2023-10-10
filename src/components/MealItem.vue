<template>
  <div
    :key="meal.idMeal"
    class="bg-whitete shadow-xl rounded-xl hover:scale-110 transition-all p-3"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <div class="px-1 py-2">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p
        :style="{
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        }"
        class="mb-4 hover:block"
      >
        {{ meal.strInstructions }}
      </p>
      <div class="flex gap-3 justify-center items-center">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
        <router-link
          class="px-3 py-2 rounded border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-all"
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          >View More</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
