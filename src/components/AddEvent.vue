<script setup lang="ts">
import { BACKEND_URL } from '@/config';
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data: function () {
    return {
      inputName: null,
      inputAbout: null,
      inputLocation: null,
      inputDateStarted: null,
      inputDateEnded: null,
      response: null,
    }
  },
  methods: {
    send: function (_: Event) {
      let formData = {
        name: this.inputName,
        about: this.inputAbout,
        location: this.inputLocation,
        date_started: this.inputDateStarted,
        date_ended: this.inputDateEnded
      };
      console.log(JSON.stringify(formData));
      axios
        .request({
          url: `${BACKEND_URL}/events`,
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(formData),
          withCredentials: true
        })
        .then(response => {
          console.log(response)
        });
    }
  }
}
</script>

<template>
  <div class="my-10 flex justify-center relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <BackgroundSquares />
    <form @submit.prevent="send" class="w-full max-w-lg bg-white backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Название
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputName" type="text" placeholder="Хакатон по JavaScript">
        </div>
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Описание
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputAbout" rows=6 type="text" placeholder="Вам будет предоставлена увлекательная задача..."></textarea>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Место проведения
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputLocation" id="grid-city" type="text" placeholder="Воронеж, Россия">
        </div>
      </div>

      <div class="relative flex flex-wrap -mx-3 -mb-2">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Время начала
          </label>
          <VDatePicker v-model="inputDateStarted" mode="dateTime" expanded is24hr />
        </div>
      </div>

      <div class="relative flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Время Окончания
          </label>
          <VDatePicker v-model="inputDateEnded" mode="dateTime" expanded is24hr />
        </div>
      </div>

      <button
        class="bg-[color:var(--primary-color)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Создать соревнование
      </button>
    </form>
  </div>
</template>