<template>
  <div id="about" class="py-24 sm:py-32" data-aos="zoom-in">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl"
        >
          {{ $t("about.title") }}
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-justify lg:text-center">
          {{ $t("about.text") }}.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div class="relative pl-16">
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              {{ $t("about.items.responsiveTitle") }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 text-justify"
            >
              {{ $t("about.items.responsiveText") }}.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </div>
              {{ $t("about.items.conversionTitle") }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 text-justify"
            >
              {{ $t("about.items.conversionText") }}.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
              </div>
              {{ $t("about.items.analysisTitle") }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 text-justify"
            >
              {{ $t("about.items.analysisText") }}.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
              </div>
              {{ $t("about.items.seoTitle") }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 text-justify"
            >
              {{ $t("about.items.seoText") }}.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>