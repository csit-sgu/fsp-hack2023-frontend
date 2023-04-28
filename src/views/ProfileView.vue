<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import BackgroundSquares from '@/components/BackgroundSquares.vue';
import UserProfile from '@/components/Profile/UserProfile.vue';
import { useAuthStore } from '@/stores/authstore';
import { router } from '@/router'

const authStore = useAuthStore()
const auth = useAuthStore()
</script>

<template>
  <div>
    <NavBar />
    <BackgroundSquares />
    <UserProfile />
  </div>
</template>