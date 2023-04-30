<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Hero from '../components/Hero.vue';

import { useAuthStore } from '../stores/authstore'
const auth = useAuthStore()
</script>

<template>
  <div>
    <NavBar />
    <Hero />
  </div>
</template>