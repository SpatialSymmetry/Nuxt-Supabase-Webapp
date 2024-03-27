
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
<section class="w-full bg-gray-200 pt-24 pb-9">

<!--  <ul class="w-full">
    <li class="max-w-screen-md mx-auto bg-gray-900 border rounded-lg text-white" v-for="entry in countries" >{{ entry }}</li>
  </ul> -->
</section>

<section class="w-full bg-gray-200 text-white pt-9 pb-36">
  <div class="max-w-screen-lg mx-auto p-16 bg-gray-900 rounded-lg">
    <p class="mb-4 text-xl font-bold">TREnD Litrature Review Form</p>
    <form action="#">
      <div class="grid gap-4">

        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Title</label>
          <input type="text" name="name" id="name" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm text-gray-900 placeholder-gray-400" placeholder="Type" required="">
        </div>

        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Author</label>
          <input type="text" name="name" id="name" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm text-gray-900 placeholder-gray-400" placeholder="Type" required="">
        </div>

        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Field 3</label>
          <input type="text" name="name" id="name" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm text-gray-900 placeholder-gray-400" placeholder="Type" required="">
        </div>

        <div>
          <label for="category" class="block mb-2 text-sm font-medium">Category</label>
          <select id="category" class="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm
            placeholder-gray-400">
            <option selected="">Select category</option>
            <option value="TV">Category 1</option>
            <option value="PC">Category 2</option>
            <option value="GA">Category 3</option>
            <option value="PH">Category 4</option>
          </select>
        </div>


        <div class="sm:col-span-2">
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
          <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your comment here"></textarea>
        </div>

      </div>

      <button type="submit" class="px-5 py-2.5 mt-4 border rounded-lg  inline-flex items-center text-sm font-medium text-center">
        Add to database
      </button>

    </form>
  </div>
</section>


</template>
