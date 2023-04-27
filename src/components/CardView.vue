<script setup lang="ts">
import Card from './Card.vue'
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'

type Card = {
  name: string,
  about: string,
  location: string,
  date_started: string,
  date_ended: string,
}

export default {
  data: function (): { cards: Card[] } {
    return {
      cards: []
    }
  },
  mounted: function () {
    axios.request({
      url: 'http://100.69.114.200:5001/events',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      params: {
        page: 0,
        per_page: 15
      }
    })
      .then(response => {
        this.cards = response.data.map(card => ({
          name: card.name,
          about: card.about,
          location: card.location,
          date_started: card.date_started,
          date_ended: card.date_ended,
        }))
        // response.data.forEach(card => {
        // });
        console.log(response)
      })
  }
}
</script>

<template>
  <div>
    <BackgroundSquares />
    <div class="grid grid-cols-3 gap-y-10 gap-x-10">
      <template v-for="card in cards">
        <Card :name="card.name" :location="card.location" :about="card.about" :date_ended="card.date_ended"
          :date_started="card.date_started" />
      </template>
      <!-- <Card title="Хакатон в рамках Всероссийских соревнований по спортивному программированию"/> 
      <Card title="Хакатон в рамках Всероссийских соревнований по спортивному программированию"/>
      <Card title="Хакатон в рамках Всероссийских соревнований по спортивному программированию"/>
      <Card title="Хакатон в рамках Всероссийских соревнований по спортивному программированию"/>
      <Card title="Хакатон в рамках Всероссийских соревнований по спортивному программированию"/> -->
    </div>
  </div>
</template>

<style scoped>
.cview {
  padding: 100px;
}
</style>