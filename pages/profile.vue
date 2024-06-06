<template>

  <div v-if="user && reviews" class=" bg-gray-200 w-full min-h-screen">
    <!-- End of Navbar -->

    <div class="container max-w-screen-lg mx-auto p-5">
      <div class="md:flex md:mx-2 ">

        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2 mb-10">
          <div class="bg-white p-3 border-t-4 border-green-400">

            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1"> {{ user.data.user.user_metadata.fullName }} </h1>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{{ user.data.user.user_metadata.Bio }}</p>

            <div class="flex items-center py-3 bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow px-3 mt-3 divide-y rounded shadow-sm">
                <span>Since</span>
                <span class="ml-auto">{{ user.data.user.created_at.split('T')[0] }}</span>
            </div>

          </div>
        </div>


        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">


          <div class="bg-white p-3 shadow-sm rounded-sm">

            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg>
              <span class="tracking-wide">About</span>
            </div>

            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Full Name:</div>
                  <div class="px-4 py-2">{{ user.data.user.user_metadata.fullName }}</div>
                </div>

                <div class="flex ">
                  <div class="px-4 py-2 font-semibold">Email:</div>
                  <div class="px-4 py-2">{{ user.data.user.email }}</div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Institution:</div>
                  <div class="px-4 py-2">{{ user.data.user.user_metadata.Institution }}</div>
                </div>

              </div>
            </div>

          </div>


          <!-- Reviews -->
          <div class="flex flex-col bg-white p-3 shadow-sm rounded-sm">

              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span class="tracking-wide">Reviews</span>
              </div>

              <ul class="list-inside space-y-2">
                <li v-for="review in reviews.data">
                  <NuxtLink :to="`/items/${review.id}`" class="text-teal-600 hover:text-blue-800 hover:underline"> {{ review.title }}</NuxtLink>
                  <div class="text-gray-500 text-xs">{{review.created_at.split('T')[0]}}</div>
                </li>
              </ul>

          </div>


        </div>
      </div>
    </div>

  </div>
  <div v-else>
    Loading...
  </div>

</template>

<style>
    :root {
        --main-color: #4a76a8;
    }

    .bg-main-color {
        background-color: var(--main-color);
    }

    .text-main-color {
        color: var(--main-color);
    }

    .border-main-color {
        border-color: var(--main-color);
    }
</style>

<script setup>

definePageMeta({
  middleware: 'auth'
})

const { $supabase } = useNuxtApp();

const user = ref(null);  // It's better to initialize with `null` to clearly indicate no user initially
const reviews = ref([]);

onMounted(async () => {
  user.value = await $supabase.auth.getUser();
  console.log("(profile) User data:", user.value.data.user.id)
  reviews.value = await $supabase.from('reviews').select('*').eq('reviewer_id', user.value.data.user.id);
});

// await $supabase.auth.updateUser({
//     data: {
//         fullName: "Poya Sohrabi",
//         Institution: "University of X",
//         Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt"
//     }
// });


</script>


