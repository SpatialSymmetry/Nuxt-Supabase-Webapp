
<template>

<section class="w-full min-h-screen bg-gray-200 pt-36">

  <div class="max-w-screen-lg mx-auto text-center px-4">
    <p class="font-extrabold tracking-tight text-gray-900 text-5xl">ECO-SET Contribution Guidelines</p>
    <p class="mt-4 sm:px-16 xl:px-48 text-gray-600">
      Welcome to the ECO-SET project! This guideline is designed to assist you in accurately and comprehensively filling out the literature review form on our platform. Your detailed input is crucial for the success of our research.
    </p>
  </div>

  <div class="max-w-screen-lg mx-auto text-center px-4 pt-10">

    <p class="font-bold tracking-tight text-gray-900 text-2xl pb-2">Introduction</p>
    <p> As part of the ECO-SET project, we depend on your insightful contributions to our comprehensive literature database. Please follow the structured form to ensure consistency and thoroughness in every entry.
    </p>

    <h3 class="text-xl mt-4 mb-2">Part 1: Basic Information</h3>
    <ol class="list-decimal ml-8 text-start">
      <li>
        <strong>Literature Title:</strong>
        <ul class="list-disc ml-4">
          <li>Provide the full title of the literature.</li>
          <li>Ensure correct spelling and capitalization.</li>
        </ul>
      </li>
      <li>
        <strong>Author(s):</strong>
        <ul class="list-disc ml-4">
          <li>List all authors as they appear in the publication.</li>
          <li>Use the format: Last Name, First Name (e.g., Smith, John).</li>
        </ul>
      </li>
      <li>
        <strong>Citation:</strong>
        <ul class="list-disc ml-4">
          <li>Include the full citation in a recognized format (APA, MLA, etc.).</li>
          <li>Example: Smith, J. (2020). Title of the Article. Journal Name, Volume(Issue), Page Numbers.</li>
        </ul>
      </li>
      <li>
        <strong>Geographical Scope:</strong>
        <ul class="list-disc ml-4">
          <li>Select the scale of geography: Global, National, Regional, or Local.</li>
          <li>Specify the geographical area covered if not apparent.</li>
        </ul>
      </li>
      <li>
        <strong>Type of Literature:</strong>
        <ul class="list-disc ml-4">
          <li>Choose the type: Paper, Thesis, Chapter, etc.</li>
        </ul>
      </li>
      <li>
        <strong>Reference Typology:</strong>
        <ul class="list-disc ml-4">
          <li>Select the appropriate category: Literature Review, Methodology, Case Study, etc.</li>
        </ul>
      </li>
      <li>
        <strong>Research Method:</strong>
        <ul class="list-disc ml-4">
          <li>Indicate if the study is Qualitative, Quantitative, or Mixed Method.</li>
        </ul>
      </li>
      <li>
        <strong>Analytical Method:</strong>
        <ul class="list-disc ml-4">
          <li>Select the method used: Spatial, Statistical, Network Analysis, etc.</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-xl mt-4 mb-2">Part 2: Keywords</h3>
    <ul class="list-disc ml-8 text-start">
      <li>Provide at least 5 keywords related to the ECO-SET project.</li>
      <li>Ensure that the keywords accurately reflect the main themes and concepts of the literature.</li>
    </ul>

    <h3 class="text-xl mt-4 mb-2">Part 3: Key Fields of Investigation</h3>
    <ol class="list-decimal ml-8 text-start">
      <li>
        <strong>Field Selection:</strong>
        <ul class="list-disc ml-4">
          <li>Check as many fields as apply, with a minimum of 5.</li>
          <li>Fields might include topics like ecosystem services, functional zoning, adaptive management, etc.</li>
        </ul>
      </li>
      <li>
        <strong>Explanation:</strong>
        <ul class="list-disc ml-4">
          <li>Write at least 300 words explaining why and how this literature connects to the ECO-SET project.</li>
          <li>Discuss the relevance and extent of the literature’s contribution to our research goals.</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-xl mt-4 mb-2">Part 4: Comments</h3>
    <ul class="list-disc ml-8 text-start">
      <li>Provide a minimum of 500 words discussing your thoughts on the connection between the literature and the ECO-SET project.</li>
      <li>Highlight the strengths, weaknesses, and potential applications of the findings.</li>
    </ul>

    <h3 class="text-xl mt-4 mb-2">Part 5: URL Upload</h3>
    <ul class="list-disc ml-8 text-start">
      <li>Paste the URL of the literature in the designated field.</li>
      <li>Ensure the link is accessible and correct.</li>
    </ul>

    <h2 class="font-bold text-3xl text-center mt-6 mb-4">Conclusion</h2>
    <p>Your detailed and thoughtful completion of this form is invaluable to our research. It ensures that we have a comprehensive understanding of the literature relevant to the ECO-SET project. Thank you for your contribution and dedication to our collective research efforts.</p>
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
