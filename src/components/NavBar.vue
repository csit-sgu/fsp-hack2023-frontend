<script setup lang="ts">
import { useAuthStore } from '../stores/authstore'
const auth = useAuthStore()
</script>

<template>
  <nav class="absolute py-4 bg-white  w-full z-20 top-0 left-0 border-b border-gray-300">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <a href="/" class="flex items-center">
        <img class="w-[140px] sm:w-[140px] mr-3" src="@/assets/images/fsp-logo.svg" alt="">
      </a>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 font-medium border border-gray-100
          rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0
          md:bg-white">
          <li v-if="!auth.token">
            <a href="/"
              class="block py-2 pl-3 pr-4 text-black hover:text-[color:var(--primary-color)] rounded md:bg-transparent md:p-0"
              aria-current="page">Главная</a>
          </li>
          <li>
            <a href="/competitions" class="block py-2 pl-3 pr-4 text-black hover:text-[color:var(--primary-color)]
        rounded md:bg-transparent md:p-0">Соревнования</a>
          </li>
          <li>
            <a href="/calendar" class="block py-2 pl-3 pr-4 text-black hover:text-[color:var(--primary-color)]
        rounded md:bg-transparent md:p-0">Календарь</a>
          </li>
          <li>
            <a href="/about" class="block py-2 pl-3 pr-4 text-black hover:text-[color:var(--primary-color)]
        rounded md:bg-transparent md:p-0">О нас</a>
          </li>
          <li v-if="auth.token">
            <a href="/profile" class="block py-2 pl-3 pr-4 text-black hover:text-[color:var(--primary-color)]
        rounded md:bg-transparent md:p-0">Профиль</a>
          </li>
        </ul>
      </div>

      <div v-if="auth.token" class="flex md:order-2">
        <a @click="auth.logout"
          class="text-white bg-[color:var(--primary-color)] focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0">Выйти</a>
      </div>
      <div v-else class="flex md:order-2">
        <a href="/login"
          class="text-white bg-[color:var(--primary-color)] focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0">Войти</a>
      </div>

    </div>
  </nav>
</template>
