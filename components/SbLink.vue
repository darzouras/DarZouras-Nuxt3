<script>
export default {
  props: {
    link: Object
  }
}
</script>

<template>
  <NuxtLink v-if="link.linktype==='story'" :to="`/${link.url}`">
    <slot />
  </NuxtLink>
  <a v-else-if="link.linktype==='email'" :href="`mailto:${link.url}`">
    <slot />
  </a>
  <a v-else :href="link.url">
    <slot />
  </a>
</template>
