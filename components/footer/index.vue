<template>
  <footer class="text-gray-600 dark:text-gray-400 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <a
            href="#"
            class="text-xl font-bold text-gray-600 dark:text-gray-400"
          >
            <img
              v-if="!isDark"
              class="h-24 w-auto"
              src="../../assets/images/logoWeDoLP_isotipo.png"
              alt="Logo"
            />
            <img
              v-else
              class="h-24 w-auto"
              src="../../assets/images/logoWeDoLP_v_Branco_isotipo.png"
              alt="Logo"
            />
          </a>
        </div>

        <div class="flex space-x-4 mb-4 md:mb-0">
          <a href="#home" class="hover:text-gray-300">{{ $t("footer.home") }}</a>
          <a href="#about" class="hover:text-gray-300">{{ $t("footer.about") }}</a>
          <a href="#services" class="hover:text-gray-300">{{ $t("footer.services") }}</a>
          <a href="#contact" class="hover:text-gray-300">{{ $t("footer.contact") }}</a>
        </div>

        <div class="flex space-x-4">
          <a
            href="https://api.whatsapp.com/send?phone=54996262629"
            target="_blank"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="mdiWhatsapp" />
            </svg>
          </a>
          <a
            href="https://github.com/JacksonSantin"
            target="_blank"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="mdiGithub" />
            </svg>
          </a>
          <a
            href="https://about-me-jacksonsantin.vercel.app"
            target="_blank"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="mdiWeb" />
            </svg>
          </a>
          <a
            href="[removido]"
            target="_blank"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="mdiInstagram" />
            </svg>
          </a>
          <a
            href="[removido]"
            target="_blank"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="mdiLinkedin" />
            </svg>
          </a>
        </div>
      </div>

      <div class="mt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} We Do Landing Pages. {{ $t("footer.reservedText") }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  mdiWhatsapp,
  mdiGithub,
  mdiWeb,
  mdiInstagram,
  mdiLinkedin,
} from "@mdi/js";
import { useDark, useToggle } from "@vueuse/core";
import dayjs from "dayjs";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const currentYear = dayjs().year();
</script>
