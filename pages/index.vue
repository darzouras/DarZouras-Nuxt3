<script setup>
import { useStoryblok } from '@storyblok/vue'

const config = useRuntimeConfig()
const story = await useStoryblok('home', {
  version: config.public.isPreview ? 'draft' : 'published'
})
</script>

<template>
  <div>{{ story }}</div>
</template>
