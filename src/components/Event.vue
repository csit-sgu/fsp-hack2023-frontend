<script setup lang="ts">
import { BACKEND_URL } from '@/config';
import axios from 'axios';
</script>

<script lang="ts">
export default {
  // props: ['name', 'about', 'location', 'date_started', 'date_ended']
  data() {
    return {
      name: null,
      about: null,
      location: null,
      date_started: null,
      date_ended: null
    }
  },
  mounted: function () {
    axios.request({
      url: `${BACKEND_URL}/event/${this.$route.params.id}`,
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        this.name = response.data.name
        this.about = response.data.about
        this.location = response.data.location
        this.date_started = response.data.date_started
        this.date_ended = response.data.date_ended
      })
  }
}
</script>

<template>
  <div class="items-center justify-center mx-auto w-2/3 mt-36 min-h-screen">
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