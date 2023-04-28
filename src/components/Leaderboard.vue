<script setup lang="ts">
import { BACKEND_URL } from '../config'
</script>

<script lang="ts">
import axios from 'axios'
import type { RatingTeam, RatingUser } from './types'

export default {
  data: function (): { users: RatingUser[], teams: RatingTeam[] } {
    return {
      users: [],
      teams: []
    }
  },
  mounted: function () {
    axios.request({
      url: `${BACKEND_URL}/leaderboard/users`,
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      params: {
        page: 0,
        per_page: 50,
        order: "desc"
      }
    })
      .then(response => {
        this.users = response.data.map((user: RatingUser) => ({
          name: user.name,
          rating: user.rating,
        }))
      })
  }
}
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Спортсмен</th>
        <th>Рейтинг</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="user in users">
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.rating }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
