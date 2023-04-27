<script setup lang="ts">
import Card from './Card.vue'
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<template>
  <div>
    <BackgroundSquares />
    <div class="grid grid-cols-3 gap-y-10 gap-x-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<style scoped>
.cview {
  padding: 100px;
}
</style>