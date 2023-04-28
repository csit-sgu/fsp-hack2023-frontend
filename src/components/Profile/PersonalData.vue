<template>
  <div>
    <div class="flex flex-row w-full">
      <div class="w-1/2 p-1">
        <div class="text-lg mb-2">Дата рождения:</div>
        <div class="flex flex-row gap-x-7 w-full">
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="День" />
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="Месяц" />
          <input type="text" class="border p-2 w-1/3 bg-white" placeholder="Год" />
        </div>
      </div>
      <div class="w-1/2 p-3">
        <div class="text-lg mb-2">Пол:</div>
        <form class="flex flex-row gap-x w-full">
          <div class="mr-5">
            <input id="male-inp" name="gender" type="radio" class="border mr-2 p-2 bg-white" placeholder="Example" />
            <label for="male-inp">Мужчина</label>
          </div>
          <div>
            <input id="female-inp" name="gender" type="radio" class="border mr-2 p-2 bg-white" placeholder="Example" />
            <label for="female-inp">Женщина</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>