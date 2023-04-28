<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Event from '../components/Event.vue';
import BackgroundSquares from '@/components/BackgroundSquares.vue';
</script>

<template>
  <div>
    <NavBar />
    <BackgroundSquares />
    <Event :date_started="'2023-04-23'" :date_ended="'2023-04-23'"
      :name="'Хакатон в рамках Всероссийских соревнований по спортивному программированию'"
      :location="'в центре гребли на дамбе Чернавского моста. Адрес: Димитрова, 2 В.'"
      :about="' \
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta dolor ac bibendum aliquet. Quisque nec tortor vel purus vulputate blandit ut et tellus. Maecenas euismod, ante non bibendum commodo, ligula dui vehicula mauris, aliquet auctor orci velit sit amet quam. Suspendisse pulvinar sed est vel blandit. Etiam porttitor ligula sit amet ligula ullamcorper sollicitudin. Cras a metus vel orci laoreet tincidunt quis vel leo. Donec sollicitudin lacus in arcu vestibulum tempor. Ut condimentum, lacus vitae maximus accumsan, felis diam tincidunt elit, sed iaculis libero nisi id est. Maecenas suscipit porttitor orci et porttitor.\
Duis commodo quam vitae posuere cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In varius tempus nunc, nec sodales velit lacinia sit amet. Suspendisse finibus lobortis risus. Nam et nunc ut nunc congue laoreet et eget erat. Cras laoreet sem quam, eget varius eros rutrum ut. Integer ornare placerat pulvinar. Ut vehicula gravida laoreet. Nulla efficitur sem hendrerit urna cursus maximus.\
Sed auctor, risus eu mollis gravida, dolor lectus semper tortor, sed dictum ligula eros sit amet nisl. Praesent sit amet nisl id nulla blandit fermentum. Ut quis sollicitudin lacus. Fusce quis ipsum ac elit tempus pharetra. Nam tempus vestibulum magna non accumsan. Nunc vitae mi nulla. Aliquam ac metus vel odio blandit imperdiet. Fusce id gravida augue. Aliquam ut diam dui. Integer erat nisi, eleifend nec consectetur id, aliquam ac sem. Suspendisse facilisis erat nunc. Maecenas tempor malesuada sem ut porta.\
Morbi a tortor sed sem venenatis pulvinar. Praesent fringilla vel eros a tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sodales ante nisi, non aliquet erat pretium vel. Nulla imperdiet sagittis tellus a rhoncus. Integer elit turpis, semper vitae dignissim ac, egestas nec nibh. Phasellus consequat turpis vitae nunc condimentum varius. Donec pulvinar tortor nulla, eget elementum arcu eleifend sed. Cras congue augue erat, a euismod diam fringilla feugiat. Suspendisse bibendum condimentum felis non mattis. Etiam at leo at ipsum interdum vulputate a a mauris. Fusce nec aliquam orci.\
Morbi pellentesque magna in metus eleifend tempus. Aliquam cursus auctor convallis. Nam vulputate, leo et molestie faucibus, lacus magna sagittis erat, eu ultrices leo diam eu enim. Cras lacinia fringilla velit, ut accumsan risus mollis id. Vivamus auctor accumsan turpis, sed placerat tellus ullamcorper a. Cras nec lectus rutrum, accumsan nibh at, commodo lacus. Aliquam vitae tristique purus. Maecenas in tortor ut neque elementum pulvinar. Maecenas egestas elementum mauris, non maximus massa dictum vitae.'"/>
  </div>
</template>