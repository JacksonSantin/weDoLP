<template>
  <div id="home" class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cecece] to-[#000000] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600"
        >
          <img
            v-if="!isDark"
            class="h-24 w-auto"
            src="../../assets/images/logoWeDoLP.png"
            alt="Logo"
          />
          <img
            v-else
            class="h-24 w-auto"
            src="../../assets/images/logo_v_branca.png"
            alt="Logo"
          />
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-5xl font-bold tracking-tight sm:text-5xl">
          {{ $t("home.title") }}.
          <vue-typewriter-effect
            :key="localeKey"
            :strings="[$t('home.typewriterText1'), $t('home.typewriterText2')]"
          />
        </h1>
        <p class="mt-6 leading-6 text-gray-600 dark:text-gray-400">
          {{ $t("home.text") }}!
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#contact"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >{{ $t("home.btnContact") }}</a
          >
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#cecece] to-[#000000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import VueTypewriterEffect from "vue-typewriter-effect";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { locale } = useI18n();
const localeKey = computed(() => locale.value);
</script>

<style>
span.Typewriter__wrapper {
  color: #4f46e5;
}
</style>
