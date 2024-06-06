
<template>

  <section v-if="data" class="w-full bg-gray-200 pt-16 pb-12 lg:pt-20 lg:pb-10">
    <div class="max-w-screen-lg mx-auto text-center px-4">
      <p class="font-extrabold tracking-tight text-gray-900 text-3xl">{{ data.title }}</p>
      <p class="pt-2 tracking-tight text-xl">{{ data.authors.join(', ') }}</p>
      <p class="pt-2 tracking-tight text-md">Reviewed by {{ data.reviewer }}, {{ data.created_at.split('T')[0] }}</p>
      <p class="mt-10 px-10 text-gray-600"> {{ data.comment }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, earum quia numquam amet voluptas nisi, minima laborum fugiat laboriosam tempore pariatur asperiores fugit facilis quasi doloribus ipsum! Cumque, explicabo voluptatum.</p>
    </div>
  </section>

  <section v-if="data" class="w-full bg-gray-200 pt-5 pb-12 lg:pt-10 lg:pb-10">
    <div class="max-w-screen-lg mx-auto text-center px-4">

      <div class="mb-10">
        <div class="mx-10 my-2 bg-gray-800 text-gray-200 rounded-md p-4 ">
        <p><span class="font-bold">Relavence (Low, Medium, High): </span> {{ data.relevance }}</p>
        <p><span class="font-bold">Geoscope: </span> {{ data.geoscope }}</p>
        <p><span class="font-bold">Research Method (Quantitative, Qualitative, Mixed): </span> {{ data.research_method }}</p>
        <p><span class="font-bold">Case Study (True, False): </span> {{ data.case_study }}</p>
        <p><span class="font-bold">Reference Typography: </span> {{ data.ref_typography }}</p>
        <p><span class="font-bold">Source Typography: </span> {{ data.source_typography }}</p>
        </div>
      </div>

      <div class="mb-10">
        <p class="tracking-tight text-md">TREnD Keywords:</p>
        <p class="mx-10 my-2 bg-gray-800 text-gray-200 rounded-md p-4 ">{{ data.trend_keywords.join(', ') }}</p>
      </div>

      <div class="mb-10">
        <p class="tracking-tight text-md">TREnD Key Fields of Investigation: </p>
        <p class="mx-10 my-2 bg-gray-800 text-gray-200 rounded-md p-4 ">{{ data.fields.map(item => item.name).join(', ') }}</p>
      </div>

      <div class="mb-10">
        <p class="tracking-tight text-md">Citation:</p>
        <p class="mx-10 my-2 bg-gray-800 text-gray-200 rounded-md p-4 ">{{ data.citation }}</p>
      </div>


    </div>
  </section>

  <div v-else>
    Loading or no data found...
  </div>

</template>

<script setup>

definePageMeta({
  middleware: 'auth'
})
  
const { $supabase } = useNuxtApp();

const data = ref(null);
const route = useRoute();
async function fetchData() {
  const { data: itemData, error } = await $supabase.from('reviews').select('*').eq('id', route.params.id).single();
    data.value = itemData;
}

const user = ref(null);

onMounted(async () => {
  user.value = await $supabase.auth.getUser();
  // console.log(user.value.data.user.id)
  fetchData();
  console.log(data)
});

</script>

