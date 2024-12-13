<script setup>
import DesktopBulletin from './Desktop/DesktopBulletin.vue'
import MobileBulletin from './Mobile/MobileBulletin.vue'
import { useScreen } from '@/composables'

const { isMobile } = useScreen()
(isMobile)
</script>

<template>
  <nav>
    <MobileBulletin v-if="isMobile" />
    <DesktopBulletin v-else />
  </nav>
</template>
