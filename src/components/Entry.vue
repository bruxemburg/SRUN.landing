<script setup lang="ts">
import Mission from '../sections/Mission.vue'
import Introduction from '~/sections/Introduction.vue'
import Hero from '~/sections/Hero.vue'
import Showcase from '~/sections/Showcase.vue'
import Story from '~/sections/Story.vue'

</script>

<template>
  <main class="w-full flex flex-col">
    <Hero class="px-8.75em max-w-1920px mx-auto" />
    <Introduction />
    <Showcase class="px-8.75em max-w-1920px mx-auto" />
    <Story class="px-8.75em" />
    <Mission />
  </main>
</template>
