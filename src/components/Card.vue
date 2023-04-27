<script lang="ts">
export default {
  props: ['name', 'about', 'location', 'date_started', 'date_ended']
}
</script>

<template>
  <div class="flex-none rounded-2xl border bg-neutral-50 w-[360px] h-[430px]">
    <!-- <a href="#">
      <img class="card__image" alt="" />
    </a> -->
    <div class="p-[25px] flex flex-col">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-900">
        {{ name }}
      </div>
      <div class="text-sm py-5">
        <span class="text-black">Дата проведения:</span>
        <div class="grid grid-cols-2 gap-x-[10px]">
          <span class="text-[color:var(--primary-color)] ">Начало:</span> <span>{{ date_started }}</span>
          <span class="text-[color:var(--primary-color)]">Конец:</span> <span>{{ date_ended }}</span>
        </div>
      </div>
      <p class="mb-4 text-sm text-neutral-600 h-[225px] overflow-hidden">
        {{ about }}
      </p>
      <div class="relative justify-center">
        <button type="button"
          class="absolute inset-x-0 bottom-0 rounded-lg bg-[color:var(--primary-color)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">
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