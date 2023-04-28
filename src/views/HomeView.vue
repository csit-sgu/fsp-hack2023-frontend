<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Hero from '../components/Hero.vue';

import { useAuthStore } from '../stores/authstore'
import Competitions from '@/components/Competitions.vue';
const auth = useAuthStore()
</script>

<template>
  <div>
    <NavBar />
    <div v-if="auth.token">
      <Competitions />
    </div>
    <div v-else>
      <Hero />
    </div>
  </div>
</template>