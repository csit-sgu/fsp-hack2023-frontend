<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authstore';

const authStore = useAuthStore();
</script>

<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>