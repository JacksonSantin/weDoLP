<template>
  <div
    id="services"
    class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl"
            >
              {{ $t("services.title") }}
            </h1>
            <p class="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400 text-justify">
              {{ $t("services.subtitle") }}.
            </p>
          </div>
        </div>
      </div>
      <div
        class="p-4 lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <img
          class="w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[40rem] lg:max-w-none"
          src="../../assets/images/graphic.jpg"
          alt=""
        />
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div
            class="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-400 lg:max-w-lg"
          >
            <p class="text-justify">{{ $t("services.text") }}.</p>
            <ul
              role="list"
              class="mt-8 space-y-8 text-gray-600 dark:text-gray-400"
            >
              <li class="flex gap-x-3">
                <GlobeAltIcon
                  class="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span class="text-justify"
                  ><strong
                    class="font-semibold text-gray-900 dark:text-gray-300"
                    >{{ $t("services.domainTitle") }}</strong
                  >
                  {{ $t("services.domainText") }}.</span
                >
              </li>
              <li class="flex gap-x-3">
                <PhoneIcon
                  class="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span class="text-justify"
                  ><strong
                    class="font-semibold text-gray-900 dark:text-gray-300"
                    >{{ $t("services.suportTitle") }}</strong
                  >
                  {{ $t("services.suportText") }}.</span
                >
              </li>
              <li class="flex gap-x-3">
                <LockClosedIcon
                  class="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span class="text-justify"
                  ><strong
                    class="font-semibold text-gray-900 dark:text-gray-300"
                    >{{ $t("services.sslTitle") }}</strong
                  >
                  {{ $t("services.sslText1") }}.</span
                >
              </li>
            </ul>
            <p class="mt-8 text-justify">{{ $t("services.sslText2") }}.</p>
            <h2
              class="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300"
            >
              {{ $t("services.question") }}
            </h2>
            <p class="mt-6 text-justify">{{ $t("services.answare") }}.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  GlobeAltIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";
</script>
