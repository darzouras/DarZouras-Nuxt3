<script setup>
import { useStoryblok } from '@storyblok/vue'

const config = useRuntimeConfig()
const global = await useStoryblok('global', {
  version: config.public.isPreview ? 'draft' : 'published',
})
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in global.content.Links" :key="link._uid">
          <SbLink :link="link.link">
            {{ link.text }}
          </SbLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
