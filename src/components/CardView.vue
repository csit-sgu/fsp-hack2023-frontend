<script setup lang="ts">
import Card from './Card.vue'
import { BACKEND_URL } from '../config'
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'
import type { Event } from './types'

export default {
  data: function (): { cards: Event[] } {
    return {
      cards: []
    }
  },
  mounted: function () {
    console.log(`${BACKEND_URL}/events`)
    axios.request({
      url: `${BACKEND_URL}/events`,
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      params: {
        page: 0,
        per_page: 15
      }
    })
      .then(response => {
        this.cards = response.data.map((card: Event) => ({
          name: card.name,
          about: card.about,
          location: card.location,
          date_started: card.date_started,
          date_ended: card.date_ended,
        }))
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
    </div>
  </div>
</template>