
<template>

<!-- Navigation Section -->
<section class="w-full bg-gray-200">
<div class="max-w-screen-lg mx-auto py-5 text-gray-900 font-medium flex justify-between">
  <NuxtLink to="/">TREnD</NuxtLink>
  <div class="flex gap-6">
    <NuxtLink href="/">Home</NuxtLink>
    <NuxtLink to="/form">Form</NuxtLink>
    <NuxtLink href="/guidelines">Guidelines</NuxtLink>
  </div>
  <NuxtLink to="/profile">Profile</NuxtLink>
</div>
</section>

<!-- Hero Section -->
<section class="w-full bg-gray-200 pt-10">
<div class="max-w-screen-lg mx-auto text-center">
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700" role="alert">
        <span class="text-xs bg-gray-200 rounded-full text-gray-900 px-4 py-1.5 mr-3">Note</span> <span class="text-sm font-medium">This is a static user profile!</span> 
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
</div>
</section>

<div  class="w-full bg-gray-200">

<div class="p-16 max-w-screen-lg mx-auto bg-gray-200">
  <div class="p-8 bg-white shadow mt-24">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        <div>
          <p class="font-bold text-gray-700 text-xl">22</p>
          <p class="text-gray-400">Reviews</p>
        </div>
      </div>
      <div class="relative">
        <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
        <button
            class="text-white py-2 px-4 rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
            See Reviews
        </button>
      </div>
    </div>

    <div class="mt-20 text-center border-b pb-12">
      <h1 class="text-4xl font-medium text-gray-700">Poya Sohrabi, <span class="font-light text-gray-500">30</span></h1>
      <p class="font-light text-gray-600 mt-3">Bucharest, Romania, University of X</p>

      <p class="mt-8 text-gray-500">Researcher</p>
      <p class="mt-2 text-gray-500">Department of X</p>
    </div>

    <div class="mt-12 flex flex-col justify-center">
      <p class="text-gray-600 text-center font-light lg:px-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore totam aperiam, est aut corrupti fugit omnis modi veniam voluptatem fuga saepe nesciunt atque! Repellat voluptas omnis quis quam deleniti.</p>
      <button
          class="text-indigo-500 py-2 px-4  font-medium mt-4"
          >
          Show more
      </button>
    </div>

  </div>
</div>
</div>

</template>
