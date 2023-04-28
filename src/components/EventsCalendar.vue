<script setup lang="ts">
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { ref, computed } from 'vue';
// https://vcalendar.io/calendar/attributes.html#popovers
// let attributes = null
// let todo = ref([])

// axios.request({
//   url: `${BACKEND_URL}/events`,
//   method: 'get',
//   headers: { 'Content-Type': 'application/json' },
//   params: {
//     page: 0,
//     per_page: 15
//   }
// }).then(response => {
//   // let todo = []
//   response.data.forEach((element: Event) => {
//     todo.value.push({
//       description: element.name,
//       isComplete: false,
//       // dates: {
//       //   // start: new Date(element.date_started),
//       //   // end: new Date(element.date_ended)
//       //   start: "2023-04-23",
//       //   end: "2023-04-23"
//       // },
//       dates: "04/23/2023",
//       color: 'blue',
//     });
//   });


  // console.log(todo)

  // const todos = ref(todo);
  // attributes = computed(() => [
  //   // Attributes for todos
  //   ...todos.value.map(todo => ({
  //     dates: todo.dates,
  //     dot: {
  //       color: todo.color,
  //       class: todo.isComplete ? 'opacity-75' : '',
  //     },
  //     // We need to at least pass a truthy value for the popover to appear
  //     // Pass an object to customize popover settings like visibility, placement, etc.
  //     popover: true,
  //     customData: todo,
  //   })),
  // ]);

  // let points = []
  // response.data.forEach((element: Event) => {
  //   let attr = {
  //     dates: {
  //       // start: new Date(element.date_started),
  //       // end: new Date(element.date_ended)
  //       start: new Date("2023-04-23"),
  //       end: new Date("2023-04-23")
  //     },
  //     dot: {
  //       color: 'red'
  //     },
  //     popover: true,
  //     customData: {
  //       description: element.name,
  //       isComplete: false
  //     }
  //   }
  //   points.push(attr)
  // })
  // attributes = computed(() => [...points.value])

  // console.log(points)
  // console.log(attributes)
// })

// let todos = [
//   {
//     description: 'Take Noah to basketball practice.',
//     isComplete: false,
//     dates: "04/25/2023", // Every Friday
//     color: 'red',
//   },
//   {
//     description: 'Take Noah to basketball practice.',
//     isComplete: false,
//     dates: "04/23/2023", // Every Friday
//     color: 'blue',
//   },
// ];
// let todos = todo
// console.log(todos)
// console.log(todo)


// const ae = [
//   // Attributes for todos
//   ...todos.value.map(todo => ({
//     dates: todo.dates,
//     dot: {
//       color: todo.color,
//       class: todo.isComplete ? 'opacity-75' : '',
//     },
//     // We need to at least pass a truthy value for the popover to appear
//     // Pass an object to customize popover settings like visibility, placement, etc.
//     popover: true,
//     customData: todo,
//   })),
// ]
// // console.log(todos.value)
// // console.log(ae)
// const attributes2 = computed(() => ae);
// console.log(attributes2)
</script>

<template>
  <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 lg:px-8 md:text-center">
    <div class="w-2/3">
      <VCalendar expanded />
      <!-- <VCalendar :attributes="attributes2" expanded>
        <template #day-popover="{ dayTitle, attributes }">
          <div class="px-2">
            <div class="text-xs text-gray-700 dark:text-gray-300 font-semibold text-center">
              {{ dayTitle }}
            </div>
            <ul>
              <li v-for="{ key, customData } in attributes" :key="key"
                class="block text-xs text-gray-700 dark:text-gray-300 bg-red-100">
                {{ customData.description }}
              </li>
            </ul>
          </div>
        </template>
      </VCalendar> -->

    </div>
  </div>
</template>

<style>
.vc-day {
  border-width: 1px;
  height: 90px;
  justify-content: start;
}

.vc-day-box-center-center {
  align-items: start;
}
</style>