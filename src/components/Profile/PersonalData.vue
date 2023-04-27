<template>
  <div>
    <div class="flex flex-row w-full">
      <div class="w-1/2 p-3">
        <div class="text-lg mb-2">Дата рождения:</div>
        <div class="flex flex-row gap-x-7 w-full">
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="Example" />
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="Example" />
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="Example" />
        </div>
      </div>
      <div class="w-1/2 p-3">
        <div class="text-lg mb-2">Пол:</div>
        <form class="flex flex-row gap-x w-full">
          <input id="male-inp" name="gender" type="radio" class="border p-2 w-1/3 bg-white" placeholder="Example" />
          <label for="male-inp">Мужчина</label>
          <input id="female-inp" name="gender" type="radio" class="border p-2 w-1/3 bg-white" placeholder="Example" />
          <label for="female-inp">Женщина</label>
        </form>
      </div>
    </div>
    <div class="text-lg mb-2">Дата рождения:</div>
  </div>
</template>