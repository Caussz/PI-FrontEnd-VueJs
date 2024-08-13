import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useScreenStore = defineStore('screen', () => {
 
  const mobile = useStorage('screen', {
    isMobile: false
  })

  return { mobile }
})
