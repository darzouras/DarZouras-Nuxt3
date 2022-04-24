<script>
export default {
  props: {
    links: Object
  }
}
</script>


<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in links" :key="link._uid">
          <SbLink :link="link.link">
            {{ link.text }}
          </SbLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
nav {
  @apply fixed bottom-0 left-0 right-0 w-full z-10 md:top-0 md:right-auto md:bottom-auto md:w-auto;
}
nav ul {
  @apply flex flex-row bg-dark-purple text-white text-lg leading-snug tracking-wider;
}
nav ul li {
  @apply flex-1 text-center py-5 md:flex-none md:px-10;
}
nav ul li a {
  @apply hover:underline hover:bg-dark-green;
}
</style>