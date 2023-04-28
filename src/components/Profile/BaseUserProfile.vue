<script lang="ts">
export default {
  props: ['name', 'surname', 'patronymic', 'email']
}
</script>

<template>
  <div class="flex flex-row">
    <div class="rounded-full pr-7">
      <img class="profile-avatar"
        src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614612233_137-p-fon-dlya-fotoshopa-priroda-209.jpg"
        alt="">
    </div>
    <div class="flex flex-col text-left pt-4">
      <div class="text-3xl">{{ surname }} {{ name }} {{ patronymic }}</div>
      <div class="pb-3">{{ email }}</div>
      <div class="grid grid-cols-2">
        <div><strong>Дата регистрации:</strong></div>
        <div>28.04.2023</div>
        <div><strong>Был в сети:</strong></div>
        <div>28.04.2023</div>
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