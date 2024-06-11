
<template>

<section class="w-full min-h-screen bg-gray-200 pt-36">

  <div class="max-w-screen-lg mx-auto text-center px-4">
    <p class="font-extrabold tracking-tight text-gray-900 text-5xl">ECO-SET Search Guidelines</p>
    <p class="mt-4 sm:px-16 xl:px-48 text-gray-600">
    Welcome to the ECO-SET platform's search functionalities! These guidelines will help you effectively utilize our search engine to enhance your research by finding the most relevant information swiftly and efficiently.
    </p>
  </div>

  <div class="max-w-screen-lg mx-auto text-center px-4 pt-10">

    <h3 class="text-xl mt-4 mb-2">Using the Search Engine</h3>
    <p class="mt-2">
      The ECO-SET platform provides a powerful search engine to help researchers quickly find relevant information. It features two modes: Local Search Mode and Google Scholar Mode. This section will guide you through using both modes effectively.
    </p>

    <h4 class="text-lg mt-4">Local Search Mode</h4>
    <ol class="list-decimal ml-8 text-start">
      <li>Navigate to the search engine on the ECO-SET platform and select "Local Search Mode."</li>
      <li>Enter relevant keywords related to your research topics such as ecosystem services or adaptive management.</li>
      <li>If you know the exact title of the literature, enter it into the search bar for precise results.</li>
      <li>Review the forms displayed to familiarize yourself with colleagues' ideas and explanations about the literature.</li>
      <li>This mode allows you to gain insights from your peers’ analyses and discover related literature within the ECO-SET project.</li>
    </ol>

    <h4 class="text-lg mt-4">Google Scholar Mode</h4>
    <ol class="list-decimal ml-8 text-start">
      <li>Switch to "Google Scholar Mode" via the search engine on the ECO-SET platform.</li>
      <li>Input keywords relevant to your research, such as ecosystem services or functional zoning.</li>
      <li>The search engine will connect to Google Scholar and display relevant academic works.</li>
      <li>Click on the search results to access the full text or abstracts of the literature.</li>
      <li>This mode offers access to a vast database of academic literature, helping you expand your research base.</li>
    </ol>

    <h2 class="font-bold text-3xl text-center mt-6 mb-4">Conclusion</h2>
    <p>Using the search engine on the ECO-SET platform effectively can significantly enhance your research process. Whether you are exploring your colleagues' contributions through Local Search Mode or expanding your literature base with Google Scholar Mode, these tools are designed to provide you with comprehensive and relevant information. Happy researching!</p>

  </div>

  <div class="pb-32"></div>

</section>

</template>


<script setup>

definePageMeta({
  middleware: 'auth'
})

const { $supabase } = useNuxtApp();
onMounted(async () => {
  const user = await $supabase.auth.getUser();
  console.log('(form-guide) User data:', user.data.user.id);
});

</script>
