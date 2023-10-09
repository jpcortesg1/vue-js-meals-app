<template>
  <div class="flex flex-col items-center justify-center p-8">
    <input
      type="text"
      class="rounded bottom-2 border-gray-200 w-full text-center"
      placeholder="Search for Meals"
    />

    <div class="flex gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const res = await axiosClient.get("list.php?i=list");
  ingredients.value = res?.data;
});
</script>
