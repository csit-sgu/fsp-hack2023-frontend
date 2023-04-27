<script setup lang="ts">
import BackgroundSquares from '../components/BackgroundSquares.vue';
</script>

<template>
    <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <BackgroundSquares />
        <div class="h-fit flex items-center justify-center mx-auto max-w-5xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Спортивное программирование <br />
                    для каждого
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    Прими участие в разработке передовых IT-решений.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/register"
                        class="rounded-md bg-[color:var(--primary-color)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FF9533] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[color:var(--primary-color)]">
                        Участвовать
                    </a>
                    <a href="/about" class="text-sm font-semibold leading-6 text-gray-900">
                        Узнать больше <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
