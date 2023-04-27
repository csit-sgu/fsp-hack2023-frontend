<template>
  <div class="flex-none rounded-2xl border bg-neutral-50 w-[360px] h-[430px]">
    <!-- <a href="#">
      <img class="card__image" alt="" />
    </a> -->
    <div class="p-[25px] flex flex-col">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-900">
        Хакатон в рамках Всероссийских соревнований по спортивному программированию
      </div>
      <div class="text-sm py-5">
        <span class="text-[#FF9533]">Дата проведения:</span>
        <div class="grid grid-cols-2 gap-x-[10px]">
          <span class="text-[#FF9533] ">Начало:</span> <span>27 апреля 2023</span>
          <span class="text-[#FF9533]">Конец:</span> <span>27 апреля 2023</span>
        </div>
      </div>
      <p class="mb-4 text-sm text-neutral-600 h-[115px] overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta dolor
        ac bibendum aliquet. Quisque nec tortor vel purus vulputate blandit ut
        et tellus. Maecenas euismod, ante non bibendum commodo, ligula dui
        vehicula mauris, aliquet auctor orci velit sit amet quam. Suspendisse
        pulvinar sed est vel blandit. Etiam porttitor ligula sit amet ligula
        ullamcorper sollicitudin.
      </p>
      <div class="flex justify-center">
        <button type="button"
          class="inline-block w-fit rounded-lg bg-[#FF9533] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">
          Открыть подробности
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
} */
.card__image {
  background-image: url("https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(75%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}

/* .card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
} */

/* .card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
} */
</style>