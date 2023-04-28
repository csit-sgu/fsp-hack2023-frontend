<script lang="ts">
import BaseProfile from './BaseUserProfile.vue'
import PersonalData from './PersonalData.vue'
import axios from 'axios'
import { BACKEND_URL } from '@/config'
import type { Profile } from '@/components/types'
import { useAuthStore } from '@/stores/authstore'
const auth = useAuthStore()

export default {
  data: function () {
    return {
      profile: {
        phone: null,
        address: null,
        passport: null,
        birthday: null,
        gender: null,
        organization: null,
        name: null,
        surname: null,
        patronymic: null,
        insurance: null,
      }
    }
  },
  mounted: function () {
    axios.request({
      url: `${BACKEND_URL}/profile`,
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      data: {
        token: auth.token,
      }
    })
      .then(response => {
        this.profile = response.data.map((p: Profile) => ({
          name: p.name,
          surname: p.surname,
          patronymic: p.patronymic,
          phone: p.phone,
          address: p.address,
          passport: p.passport,
          birthday: p.birthday,
          gender: p.gender,
          organization: p.organization,
          insurance: p.insurance,
        }))
      })
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <div class="w-full max-w-4xl bg-white backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
      <BaseProfile :name="profile.name"
                   :surname="profile.surname"
                   :patronymic="profile.patronymic"/>
      <div class="text-left pt-10">
        <PersonalData />
      </div>
    </div>
  </div>
</template>