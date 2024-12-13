<script setup>
import DesktopGrades from './Desktop/DesktopGrades.vue'
import MobileGrades from './Mobile/MobileGrades.vue'
import { useScreen } from '@/composables'

const { isMobile } = useScreen()
</script>

<template>
  <nav>
    <MobileGrades v-if="isMobile" />
    <DesktopGrades v-else />
  </nav>
</template>
