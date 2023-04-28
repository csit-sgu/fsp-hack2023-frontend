<script setup lang="ts">
import CardView from './CardView.vue';
</script>

<template>
  <div class="mt-36">
    <h2 class="text-2xl text-center text-black font-bold my-10">
      Текущие соревнования
    </h2>
    <div class="flex justify-center">
      <CardView />
    </div>
  </div>
  <div class="mb-24">
    <h2 class="text-2xl text-center text-black font-bold my-10">
      Доступные соревнования
    </h2>
    <div class="flex justify-center">
      <CardView />
    </div>
  </div>
</template>