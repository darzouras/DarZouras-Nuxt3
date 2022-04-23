<script setup>
import { useStoryblok } from '@storyblok/vue'

const config = useRuntimeConfig()
const story = await useStoryblok('home', {
  version: config.public.isPreview ? 'draft' : 'published'
})
</script>

<template>
  <main class="container bg-mid-green text-dark-purple">{{ story }}</main>
</template>
