<template>
  <div id="contact" class="overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="hidden lg:flex" data-aos="fade-right">
          <client-only>
            <Vue3Lottie :animation-data="ContactJSON" :width="450" />
          </client-only>
        </div>
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <div data-aos="fade-left">
              <h1
                class="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl mb-5"
              >
                {{ $t("contact.titleForm") }}
              </h1>
              <form ref="form" @submit.prevent="sendEmail">
                <div class="space-y-12">
                  <div class="my-5">
                    <div
                      class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                    >
                      <div class="col-span-12">
                        <label
                          for="name"
                          class="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
                          >{{ $t("contact.labelName") }}</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="bg-transparent block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="col-span-12">
                        <label
                          for="email"
                          class="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
                          >{{ $t("contact.labelEmail") }}</label
                        >
                        <div class="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            class="bg-transparent block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="col-span-12">
                        <label
                          for="phone"
                          class="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
                          >{{ $t("contact.labelPhone") }}</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            class="bg-transparent block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            data-maska="['(##) ####-####', '(##) #####-####']"
                            v-maska
                          />
                        </div>
                      </div>

                      <div class="col-span-12">
                        <label
                          for="company"
                          class="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
                          >{{ $t("contact.labelCompany") }}</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            class="bg-transparent block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="col-span-12">
                        <label
                          for="message"
                          class="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
                          >{{ $t("contact.labelMessage") }}</label
                        >
                        <div class="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            rows="3"
                            class="bg-transparent block w-full rounded-md border-0 py-1.5 px-2.5 dark:text-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-0 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-start gap-x-6">
                  <button
                    type="submit"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {{ $t("contact.btnSendMessage") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import ContactJSON from "../../assets/images/lotties/contact.json";
import { vMaska } from "maska/vue";
import { Vue3Lottie } from "vue3-lottie";

onMounted(() => {
  AOS.init();
});
</script>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      const formElement = this.$refs.form;
      emailjs
        .sendForm(
          "gmailMessage",
          "template_rdu5oja",
          formElement,
          "user_0VFYQ4JjMn4RkCcdx9GRB"
        )
        .then(
          async () => {
            await Swal.fire({
              title: "Obrigado :)",
              text: "Mensagem enviada com sucesso!",
              icon: "success",
            });
            window.location.reload();
          },
          () => {
            Swal.fire({
              title: "Oops :(",
              text: "Mensagem não enviada, tente novamente!",
              icon: "error",
            });
          }
        );
    },
  },
};
</script>
