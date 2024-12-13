<script setup>
import DesktopClass from './Desktop/DesktopClass.vue'
import MobileClass from './Mobile/MobileClass.vue'
import { useScreen } from '@/composables'

const { isMobile } = useScreen()
console.log(isMobile)
</script>

<template>
  <nav>
    <MobileClass v-if="isMobile" />
    <DesktopClass v-else />
  </nav>
</template>
