<template>
  <div class="bg-white dark:bg-black">
    <Header />
    <Home />
    <About />
    <Services />
    <Contact />
    <hr />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const title = "We Do Landing Pages";
const description =
  "Bem-vindo à sua próxima grande conquista! Nossa landing page foi projetada para conectar você diretamente às soluções que sua empresa precisa. Descubra como podemos transformar seu projeto com um design envolvente, otimizado para conversões e feito sob medida para alcançar seus objetivos. Aproveite nossa oferta exclusiva e veja como uma página bem elaborada pode fazer a diferença. Entre em contato agora e dê o primeiro passo para maximizar seu sucesso!";
const image = "../assets/images/logoWeDoLP_isotipo.png";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary_large_image",
});

useHead({
  title,
  htmlAttrs: {
    lang: "pt-BR",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
