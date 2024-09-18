<template>
  <header :class="['fixed inset-x-0 top-0 z-50', headerClass]">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <img
            v-if="!isDark"
            class="h-10 w-auto"
            src="../../assets/images/logoWeDoLP_isotipo.png"
            alt="Isotipo"
          />
          <img
            v-else
            class="h-10 w-auto"
            src="../../assets/images/logoWeDoLP_v_Branco_isotipo.png"
            alt="Isotipo"
          />
        </a>
      </div>

      <div
        class="flex items-center space-x-4 lg:flex lg:flex-1 lg:justify-end"
      >
        <div class="flex items-center space-x-2">
          <img
            src="../../assets/images/flags/br-flag.gif"
            alt="Português"
            class="h-6 w-6 cursor-pointer rounded-full"
            @click="setLocale('pt')"
          />
          <img
            src="../../assets/images/flags/us-flag.gif"
            alt="English"
            class="h-6 w-6 cursor-pointer rounded-full"
            @click="setLocale('en')"
          />
          <img
            src="../../assets/images/flags/sp-flag.gif"
            alt="Español"
            class="h-6 w-6 cursor-pointer rounded-full"
            @click="setLocale('es')"
          />
        </div>
        <button
          v-if="!isDark"
          type="button"
          class="p-1.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <MoonIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          v-else
          type="button"
          class="p-1.5 rounded-full dark:hover:bg-neutral-800 hover:bg-slate-100 dark:text-gray-300 text-gray-700"
          @click="toggleDark()"
        >
          <SunIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const { locale } = useI18n();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const headerClass = computed(() => {
  return {
    'bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 transform translate-y-0 opacity-100 transition-all duration-300': isScrolled.value,
    'bg-transparent dark:bg-transparent opacity-100 transform translate-y-0 transition-all duration-300': !isScrolled.value,
  };
});

const setLocale = (localeCode) => {
  locale.value = localeCode;
};
</script>

<style scoped>
.header {
  transition: background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}
</style>