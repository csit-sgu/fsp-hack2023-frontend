<script setup lang="ts">
import BaseProfile from './BaseUserProfile.vue'
import PersonalData from './PersonalData.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <div class="w-full max-w-4xl bg-white backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
      <BaseProfile />
      <div class="text-left pt-10">
        <PersonalData />
      </div>
    </div>
  </div>
</template>