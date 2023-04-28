<script lang="ts">
import BackgroundSquares from '../components/BackgroundSquares.vue';
import { useAuthStore } from '../stores/authstore'

export default {
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data: function () {
    return {
      inputEmail: null,
      inputPassword: null,
      response: null,
      err: ""
    }
  },
  methods: {
    async signin(_: Event) {
      let result = await this.auth.signIn(this.inputEmail, this.inputPassword)
      if (result != null) {
        this.err = result
      }
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
        <div class="mt-3 text-red-500">
          {{ err }}
        </div>
      </form>
    </div>
  </div>
</template>