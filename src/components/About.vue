<script setup lang="ts">
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white px-6 pt-24 sm:py-32 lg:overflow-visible lg:px-0">
    <BackgroundSquares />
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-[color:var(--primary-color]">Присоединяйся!</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Увлекательные соревнования</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">Наша цель — сделать мир программирования
              <em>ещё интереснее и увлекательнее</em>. Мы стремимся предоставлять соревнования и
              хакатоны на различные темы, чтобы дать возможность разработчикам и программистам
              проявить свой талант, повысить свой уровень знаний и навыков, а также завести новых
              знакомых и друзей.
            </p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] sm:w-[57rem]" src="@/assets/images/about_side.png" alt="">
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>Мы понимаем, как важно для программистов иметь возможность продемонстрировать свои умения в настоящем
              конкурентном окружении, поэтому мы предоставляем участникам наших мероприятий широкий спектр задач и
              заданий, которые требуют от них использования всех своих знаний и навыков.</p>
            <p class="mt-8">Кроме того, наш сайт предоставляет возможность организаторам создавать новые соревнования и
              хакатоны, используя нашу платформу. Это простой и удобный способ создать свое мероприятие и привлечь к нему
              участников со всего мира.</p>
            <p class="mt-6">Мы стремимся создавать сообщество программистов, которые разделяют нашу страсть к
              информационным технологиям и нашу цель - улучшить мир через инновационные идеи и продукты. Мы приглашаем вас
              присоединиться к нашему сообществу и стать частью этого замечательного опыта.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>