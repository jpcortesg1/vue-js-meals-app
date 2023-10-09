<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch px-5">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full">
      Home
    </router-link>
    <div class="flex gap-1">
      <router-link
        :to="{ name: 'home' }"
        class="transition-colors px-2 hover:bg-purple-100 flex items-center h-full"
      >
        Home
      </router-link>

      <router-link
        :to="{ name: 'byLetter' }"
        class="transition-colors px-2 hover:bg-purple-100 flex items-center h-full"
      >
        Meals By Letters
      </router-link>

      <router-link
        :to="{ name: 'byIngredient' }"
        class="transition-colors px-2 hover:bg-purple-100 flex items-center h-full"
      >
        Meals By Ingredients
      </router-link>

      <router-link
        :to="{ name: 'byName' }"
        class="transition-colors px-2 hover:bg-purple-100 flex items-center h-full"
      >
        Meals By Name
      </router-link>
    </div>
  </header>
</template>
