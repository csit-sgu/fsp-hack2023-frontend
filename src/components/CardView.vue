<script setup lang="ts">
import Card from './Card.vue'
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data: function () {
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
        page: 1,
        per_page: 15
      }
    })
      .then(response => {
        console.log(response)
      })
    // axios
    //   .request({
    //     url: 'http://100.69.114.200:5001/auth/login',
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     data: JSON.stringify(formData),
    //     withCredentials: true
    //   })
    //   .then(response => {
    //     this.response = response.data;
    //     console.log(response)
    //   });
  }
}
</script>

<template>
  <div>
    <BackgroundSquares />
    <div class="grid grid-cols-3 gap-y-10 gap-x-10">
      <template v-for="title in cards">
        <Card :title="title" />
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