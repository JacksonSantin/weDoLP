import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import pt from '@/locales/pt'
import en from '@/locales/en'
import es from '@/locales/es'

// Tipo para os locales disponíveis
export type Locale = 'pt' | 'en' | 'es'

// Tipo para as mensagens de tradução
export type Messages = typeof pt

// Estado global do locale (singleton)
let currentLocale: Ref<Locale>
let initialized = false

// Objeto com todas as traduções
const messages: Record<Locale, Messages> = {
  pt,
  en,
  es
}

// Informações sobre os locales
export const locales = [
  { code: 'pt' as Locale, name: 'Português', flag: 'br-flag.gif' },
  { code: 'en' as Locale, name: 'English', flag: 'us-flag.gif' },
  { code: 'es' as Locale, name: 'Español', flag: 'sp-flag.gif' }
]

export const useTranslation = () => {
  // Inicializar apenas uma vez
  if (!initialized) {
    currentLocale = ref<Locale>('pt')
    initialized = true
    
    // Inicializar locale do localStorage ou navegador
    if (import.meta.client) {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && messages[savedLocale]) {
        currentLocale.value = savedLocale
      } else {
        // Detectar idioma do navegador
        const browserLang = navigator.language.split('-')[0] as Locale
        if (messages[browserLang]) {
          currentLocale.value = browserLang
        }
      }
    }
  }

  // Função para obter valor de uma chave aninhada
  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) || path
  }

  // Função $t para traduzir
  const $t = (key: string): string => {
    const translation = getNestedValue(messages[currentLocale.value], key)
    return translation
  }

  // Computed para o locale atual
  const locale = computed({
    get: () => currentLocale.value,
    set: (value: Locale) => {
      currentLocale.value = value
      // Salvar no localStorage para persistência
      if (import.meta.client) {
        localStorage.setItem('locale', value)
      }
    }
  })

  // Função para trocar o locale
  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
  }

  return {
    $t,
    locale,
    setLocale,
    locales,
    messages: computed(() => messages[currentLocale.value])
  }
}
