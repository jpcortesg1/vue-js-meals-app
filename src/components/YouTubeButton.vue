<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 cursor-pointer hover:bg-red-500 hover:text-white transition-all"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const porps = defineProps({
  href: String,
});
</script>
