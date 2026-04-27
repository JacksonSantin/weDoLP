import { defineNuxtPlugin } from '#app'
import { useTranslation } from '~/composables/useTranslation'

export default defineNuxtPlugin((nuxtApp) => {
  const { $t } = useTranslation()
  
  // Disponibilizar $t globalmente no app
  return {
    provide: {
      t: $t
    }
  }
})
