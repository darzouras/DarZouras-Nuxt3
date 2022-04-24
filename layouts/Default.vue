<script setup>
import { useStoryblok } from '@storyblok/vue'

const config = useRuntimeConfig()
const global = await useStoryblok('global', {
  version: config.public.isPreview ? 'draft' : 'published',
})
</script>

<template>
  <div
    class="min-h-screen w-full bg-white text-dark-purple"
  >
    <Header :links="global.content.Links"/>
    <main class="container pt-8 pb-28 md:py-28">
      <slot />
    </main>
    <Footer :footer="global.content.Footer" />
  </div>
</template>
