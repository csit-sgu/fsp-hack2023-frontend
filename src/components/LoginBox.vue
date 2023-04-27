<script setup lang="ts">
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data: function () {
    return {
      inputEmail: null,
      inputPassword: null,
      response: null
    }
  },
  methods: {
    signin: function (event: Event) {
      let formData = {
        email: this.inputEmail,
        password: this.inputPassword
      };
      console.log(JSON.stringify(formData));
      axios
        .request({
          url: 'http://100.69.114.200:5002/auth/login',
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
  <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <BackgroundSquares />
    <div class="w-full max-w-xs">
      <form @submit.prevent="signin" class="bg-white backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">
            Электронная почта
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputEmail" id="username" type="text" placeholder="bob@aboba.com">
        </div>
        <div class="mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
            Пароль
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPassword" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-[color:var(--primary-color)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Войти
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-[color:var(--primary-color)]" href="/register">
            Регистрация
          </a>
        </div>
      </form>
    </div>
  </div>
</template>