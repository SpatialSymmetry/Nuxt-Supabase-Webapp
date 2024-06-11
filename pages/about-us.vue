

<template>

<!-- Hero Section -->
<section class="w-full min-h-screen bg-gray-200 pt-20">

  <div class="max-w-screen-lg mx-auto text-center">
    <p class="font-extrabold tracking-tight text-gray-900 text-3xl mb-4">ECO-SET Project Overview</p>
    <p class="mt-4 mb-8 sm:px-16 xl:px-48 text-gray-600">
    The ECO-SET (Ecosystem Services in an Open Innovation) platform is mainly based on the ECO-SET literature review form (LRF) which aims to provide structured and coherent information on the references examined with respect to ECO-SETs’ key topics to build a structured and solid literature review.
    </p>

  </div>

  <div class="max-w-screen-lg mx-auto text-center border border-gray-900 rounded-lg shadow shadow-gray-900 p-4">

    <p class="mt-4 text-gray-800 ">
      ECO-SET (A Multidisciplinary Approach to Plan ECOsystem SErvices for Cities in Transition) aims to develop a data-driven urban planning strategy that incorporates ICT and AI technologies to optimize ecosystem services (ESs) in urban transformations. This initiative caters to the increasing need for cities to advance towards nature protection and biodiversity restoration. Utilizing data-driven analytical methods in urban planning is essential for mitigating the adverse effects of climate change and supporting the EU's objectives for a green, digital, and just transition. With recent technological advancements, there is a significant potential for these technologies to redefine urban planning models. This approach addresses urban and territorial fragmentation and provides a novel way to manage the complex information required to fight climate change.
    </p>

    <p class="mt-4 text-gray-800">
      As part of this shift, urban regeneration is becoming a pivotal element of future development policies, focusing on ecosystem preservation and enhancement to improve resilience and sustainability. This involves safeguarding and restoring natural habitats within urban settings and integrating green infrastructure into city planning. Such efforts are designed to heighten cities' resilience to climate impacts, enhance air and water quality, and increase green spaces for residents, thereby boosting the overall quality of life. Emphasizing ecosystem services in urban regeneration ensures that urban development is sustainable and beneficial for both the community and the environment.
    </p>

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
