<script setup lang="ts">
</script>

<script lang="ts">
export default {
  props: ['name', 'about', 'location', 'date_started', 'date_ended']
}
</script>

<template>
  <div class="items-center justify-center mx-auto w-2/3 mt-36">
    <div class="text-4xl">
      {{ name }}
    </div>
    <div class="text-xl py-5">
      <span class="text-black">Дата проведения:</span>
      <div>
        <span class="text-[color:var(--primary-color)] ">Начало:</span> <span>{{ date_started }}</span><br/>
        <span class="text-[color:var(--primary-color)]">Конец:</span> <span>{{ date_ended }}</span>
      </div>
    </div>
    <div class="text-xl py-5">
      <span class="text-black">Местоположение:</span><br/>
      <span>{{ location }}</span>
    </div>
    <p class="text-lg">
      {{ about }}
    </p>
  </div>
</template>