<script setup lang="ts">
import PersonalData from './PersonalData.vue'
</script>

<template>
  <div class="flex flex-row">
    <div class="rounded-full pr-7">
      <img class="profile-avatar" src="/avatar.png" alt="">
    </div>
    <div class="flex flex-col text-left pt-4">
      <div class="text-3xl">Хлебушкин Евстахий Евгениевич</div>
      <div class="pb-3">ewstakhii@mail.ru</div>
      <div class="grid grid-cols-2">
        <div><strong>Дата регистрации:</strong></div>
        <div>23.03.2023</div>
        <div><strong>Был в сети:</strong></div>
        <div>23.03.2023</div>
        <div><strong>Рейтинг атлета:</strong></div>
        <div>500</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  border-radius: 50%;
  border-color: #444444;
  border-width: 1px;
  min-width: 150px;
  min-height: 150px;
  max-width: 150px;
  max-height: 150px;
  display: flex;
  margin: auto;
}
</style>