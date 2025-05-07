<template>
  <button class="bg-blue-500 text-white p-2 rounded-md">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>
<style scoped></style>