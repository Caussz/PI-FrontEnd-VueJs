<script setup>
import DefaultAside from '../components/Aside/Desktop/DesktopAside.vue'
</script>

<template>
  <div id="layout-large">
    <aside>
      <DefaultAside />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
#layout-large {
    display: grid;
    grid-template-areas: 
    "aside main"
    ;
}

aside {
    grid-area: aside;
}
</style>
