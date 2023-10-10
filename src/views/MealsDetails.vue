<template>
  <div class="mx-auto px-[5%] pt-5 md:px-[10%]">
    <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-full rounded-3xl shadow-xl my-3 mx-auto"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
      <span class="flex flex-col gap-1 bg-white p-3 shadow-lg rounded-xl">
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </span>

      <span class="flex flex-col gap-1 bg-white p-3 shadow-lg rounded-xl">
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </span>

      <span class="flex flex-col gap-1 bg-white p-3 shadow-lg rounded-xl">
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </span>
    </div>

    <div>
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 my-3">
      <div class="flex flex-col justify-center items-start md:items-center">
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>

        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="flex flex-col justify-center items-start md:items-center">
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-4 flex justify-center items-center gap-4">
      <YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-all"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const id = route.params.id;
  const { data } = await axiosClient.get(`lookup.php?i=${id}`);
  meal.value = data.meals[0];
});
</script>
