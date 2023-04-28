<script setup lang="ts">
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data: function () {
    return {
      inputName: null,
      inputSurname: null,
      inputPatronymic: null,
      inputBirthday: null,
      inputOrganization: null,
      inputPassport: null,
      inputPhone: null,
      inputAddress: null,
      inputInsurance: null,
      inputEmail: null,
      inputPassword: null,
      inputIsMale: null,
      inputIsFemale: null,
      response: null,
    }
  },
  methods: {
    register: function (_: Event) {
      let bd: Date = this.inputBirthday
      let birthday = bd.getFullYear() + '/' + bd.getMonth() + '/' + bd.getDay()
      let gender = this.inputIsFemale == "on" ? 'FEMALE' : 'MALE';
      let formData = {
        auth: {
          email: this.inputEmail,
          password: this.inputPassword
        },
        profile: {
          name: this.inputName,
          surname: this.inputSurname,
          patronymic: this.inputPatronymic,
          birthday: this.inputBirthday,
          passport: this.inputPassport,
          phone: this.inputPhone,
          address: this.inputAddress,
          organization: this.inputOrganization,
          insurance: this.inputInsurance,
          gender: gender
        }
      };
      console.log(JSON.stringify(formData));
      axios
        .request({
          url: 'http://100.69.114.200:5002/auth/register',
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(formData),
          withCredentials: true
        })
        .then(response => {
          this.response = response.data;
          console.log(response)
        });
    }
  }
}
</script>

<template>
  <div class="my-10 flex justify-center relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <BackgroundSquares />
    <form @submit.prevent="register" class="w-full max-w-lg bg-white backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Имя
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputName" id="grid-first-name" type="text" placeholder="Мирон">
        </div>
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Фамилия
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputSurname" id="grid-last-name" type="text" placeholder="Сергеев">
        </div>
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Отчество (необязательно)
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPatronymic" type="text" placeholder="Сергеевич">
        </div>
      </div>
      <form class="flex -mt-4 mb-4 w-full justify-center text-center">
        <div class="mr-20">
          <input v-model="inputIsMale" checked="checked" id="male-inp" name="gender" type="radio" class="border mr-2 p-2 bg-white" placeholder="Example" />
          <label for="male-inp">Мужчина</label>
        </div>
        <div>
          <input v-model="inputIsFemale" id="female-inp" name="gender" type="radio" class="border mr-2 p-2 bg-white" placeholder="Example" />
          <label for="female-inp">Женщина</label>
        </div>
      </form>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Адрес проживания
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputAddress" type="text" placeholder="г. Санкт-Петербург, ул. Пушкина, д. 2">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Организация
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputOrganization" type="text"
            placeholder="Саратовский Государственный Университет им. Н. Г. Чернышевского">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Полис страхования
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputInsurance" type="text" placeholder="999994">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Серия и номер паспорта
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPassport" type="text" placeholder="6316 117391">
        </div>
      </div>
      <div class="relative flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Дата рождения
          </label>
          <VDatePicker v-model="inputBirthday" mode="date" expanded is24hr />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Номер телефона
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPhone" type="text" placeholder="+78005553535">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Почта
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputEmail" type="text" placeholder="bob@aboba.com">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full py-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Пароль
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPassword" id="grid-password" type="password" placeholder="******************">
        </div>
      </div>
      <button
        class="bg-[color:var(--primary-color)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>
