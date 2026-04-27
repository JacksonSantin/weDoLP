# 🌍 Sistema de Tradução (i18n)

Sistema de internacionalização limpo e dinâmico, totalmente integrado ao Nuxt 3, sem dependências externas de i18n.

## 📁 Estrutura

```
/locales
  ├── pt.ts    # Traduções em Português
  ├── en.ts    # Traduções em Inglês
  └── es.ts    # Traduções em Espanhol
/composables
  └── useTranslation.ts  # Composable principal
/plugins
  └── i18n.ts  # Plugin que disponibiliza $t globalmente
```

## 🚀 Como Usar

### 1. Em Templates (com $t)

```vue
<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('about.text') }}</p>
  </div>
</template>
```

### 2. Em Scripts (com composable)

```vue
<script setup>
const { $t, locale, setLocale } = useTranslation()

// Usar tradução
const title = $t('home.title')

// Obter locale atual
console.log(locale.value) // 'pt', 'en' ou 'es'

// Trocar idioma
setLocale('en')
</script>
```

### 3. Trocar Idioma

```vue
<script setup>
const { setLocale } = useTranslation()

const changeLanguage = (lang) => {
  setLocale(lang) // 'pt', 'en' ou 'es'
}
</script>

<template>
  <button @click="changeLanguage('pt')">Português</button>
  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('es')">Español</button>
</template>
```

## 📝 Adicionar Novas Traduções

### 1. Edite os arquivos em `/locales`

**locales/pt.ts**
```typescript
export default {
  home: {
    title: "Título em Português",
    subtitle: "Subtítulo em Português"
  }
}
```

**locales/en.ts**
```typescript
export default {
  home: {
    title: "Title in English",
    subtitle: "Subtitle in English"
  }
}
```

**locales/es.ts**
```typescript
export default {
  home: {
    title: "Título en Español",
    subtitle: "Subtítulo en Español"
  }
}
```

### 2. Use no template

```vue
<template>
  <h1>{{ $t('home.title') }}</h1>
  <p>{{ $t('home.subtitle') }}</p>
</template>
```

## ✨ Funcionalidades

- ✅ **Type-Safe**: Arquivos TypeScript com tipagem forte
- ✅ **Auto-Persistência**: Salva o idioma escolhido no localStorage
- ✅ **Detecção Automática**: Detecta idioma do navegador na primeira visita
- ✅ **Global**: Função `$t()` disponível em todos os componentes
- ✅ **Reativo**: Mudanças de idioma atualizam todos os componentes automaticamente
- ✅ **Leve**: Sem dependências externas pesadas
- ✅ **Fácil de Estender**: Basta adicionar novas chaves nos arquivos de tradução

## 🎯 API Completa

### useTranslation()

```typescript
const {
  $t,          // Função para traduzir: $t('home.title')
  locale,      // Ref do locale atual: 'pt' | 'en' | 'es'
  setLocale,   // Função para trocar idioma: setLocale('en')
  locales,     // Array com info dos idiomas disponíveis
  messages     // Objeto computed com todas as traduções do locale atual
} = useTranslation()
```

### Tipos Disponíveis

```typescript
type Locale = 'pt' | 'en' | 'es'
type Messages = typeof pt  // Estrutura das mensagens
```

## 🌐 Idiomas Disponíveis

| Código | Nome       | Bandeira      |
|--------|------------|---------------|
| `pt`   | Português  | br-flag.gif   |
| `en`   | English    | us-flag.gif   |
| `es`   | Español    | sp-flag.gif   |

## 📦 Estrutura de Mensagens

Todas as chaves de tradução seguem o mesmo padrão em todos os idiomas:

```typescript
{
  home: {
    title: string
    typewriterText1: string
    typewriterText2: string
    text: string
    btnContact: string
  },
  about: {
    title: string
    text: string
    items: {
      responsiveTitle: string
      responsiveText: string
      // ...
    }
  },
  services: { /* ... */ },
  contact: { /* ... */ },
  footer: { /* ... */ }
}
```

## 🔧 Exemplo Prático

```vue
<script setup>
const { $t, locale, setLocale, locales } = useTranslation()

// Reactive - atualiza quando o idioma muda
const greeting = computed(() => $t('home.title'))

// Watch para mudanças de idioma
watch(locale, (newLocale) => {
  console.log(`Idioma alterado para: ${newLocale}`)
})
</script>

<template>
  <div>
    <!-- Usando tradução -->
    <h1>{{ greeting }}</h1>
    
    <!-- Seletor de idiomas -->
    <div>
      <button 
        v-for="loc in locales" 
        :key="loc.code"
        @click="setLocale(loc.code)"
        :class="{ active: locale === loc.code }"
      >
        {{ loc.name }}
      </button>
    </div>
  </div>
</template>
```

---

**Desenvolvido com ❤️ para We Do Landing Pages**
