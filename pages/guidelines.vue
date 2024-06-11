
<template>

<!-- Hero Section -->
<section class="w-full bg-gray-200 pt-36">
  <div class="max-w-screen-lg mx-auto text-center px-4">
    <p class="font-extrabold tracking-tight text-gray-900 text-5xl">ECO-SET Literature Review Guidelines</p>
    <p class="mt-4 sm:px-16 xl:px-48 text-gray-600">
      Welcome to the ECO-SET project! Our guidelines are designed to assist researchers in conducting thorough and precise literature reviews. Our goal is to support you in contributing high-quality, insightful reviews that enhance our collective understanding of environmental and ecological studies.
    </p>
  </div>
</section>

<section class="w-full bg-gray-200 text-gray-600 body-font pb-44">
  <div class="max-w-screen-md container px-5 py-24 mx-auto">
    <div class="flex">
      <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Contribution Guidelines</h2>
        <p class="leading-relaxed text-base mb-4">
          We rely on your detailed and accurate submissions to build a robust database of knowledge. This section outlines the steps and standards for submitting reviews, ensuring consistency and comprehensiveness in each entry.
        </p>
        <NuxtLink to="/form-guide" class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
      <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Search Guidelines</h2>
        <p class="leading-relaxed text-base mb-4">
          Efficiently navigating our search engine is crucial for effective research. This guide provides detailed instructions on using Search within the ECO-SET platform.        </p>
        <NuxtLink to="/search-guide" class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

</template>





<script setup>

definePageMeta({
  middleware: 'auth'
})

const { $supabase } = useNuxtApp();
onMounted(async () => {
  const user = await $supabase.auth.getUser();
  console.log('(guidelines) User data:', user.data.user.id);
});

</script>
