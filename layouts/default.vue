
<template>
  <!-- Navigation Section -->
  <section class="w-full bg-gray-200">
    <div class="max-w-screen-lg mx-auto py-5 px-5 text-gray-900 font-medium flex justify-between">
      <NuxtLink to="/">TREnD</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/form">Form</NuxtLink>
        <NuxtLink to="/guidelines">Guidelines</NuxtLink>
      </div>

      <NuxtLink to="profile" >
      <button>
        <img class="inline h-8 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4">
        <svg fill="currentColor" viewBox="0 0 20 20" class="inline w-4 h-4 transition-transform duration-200 transform">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden hidden-for-now absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
        <div class="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
          <a class="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
             href="#">Settings</a>
          <a class="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
             href="#">Help</a>
          <div class="border-b"></div>
          <a class="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
             href="#">Logout</a>
        </div>
      </div>
      </NuxtLink>







    </div>
  </section>

  <!-- Slot for the page content -->
  <slot />
</template>
