<template>

<!-- Navigation Section -->
<section class="w-full bg-gray-200">
<div class="max-w-screen-lg mx-auto py-5 px-5 text-gray-900 font-medium flex justify-between">
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
<section class="w-full bg-gray-200 pt-36 pb-24">
<div class="max-w-screen-lg mx-auto text-center">
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700" role="alert">
        <span class="text-xs bg-gray-200 rounded-full text-gray-900 px-4 py-1.5 mr-3">Note</span> <span class="text-sm font-medium">This website is not ready to be used, nor it's mobile responsive (yet)!</span> 
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
    <p class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-5xl">TREnD Litrature Review Portal.</p>
    <p class="mb-8 font-normal  sm:px-16 xl:px-48 text-gray-600">The platform is mainly based on the TREnD literature review form (LRF) which aims to provide structured and coherent information on the references examined with respect to TREnDs’ key topics to build a structured and solid literature review.</p>
    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300  focus:ring-4  hover:bg-gray-300 focus:ring-gray-800">
        <svg class="w-5 h-5 mr-2" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Read the Guidelines
    </a>
</div>
</section>

<section class="w-full bg-gray-200">
<form>
  <!-- Search Bar -->
  <div class="max-w-2xl mx-auto px-5 flex">
    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
      Local Search
      <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>

    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
        <li>
          <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Google Scholar</button>
        </li>
      </ul>
    </div>

    <div class="relative w-full">
      <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Leave empty to get all entries." required />
      <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>


  </div>

  <!-- Search Filters and Actions Section  -->
  <div class="max-w-4xl mx-auto mt-5 text-white bg-gray-700 rounded py-10 text-center">
    Filters Section
  </div>
</form>


<div class="max-w-screen-lg mx-auto py-20">
    <table class=" w-full text-left text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Author
                </th>
                <th scope="col" class="px-6 py-3">
                    Reviewer
                </th>
                <th scope="col" class="px-6 py-3">
                    Last modified
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Title name placeholder
                </th>
                <td class="px-6 py-4">
                    Author name placeholder
                </td>
                <td class="px-6 py-4">
                    Reviewer name placeholder
                </td>
                <td class="px-6 py-4">
                    2024/01/01
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Title name placeholder
                </th>
                <td class="px-6 py-4">
                    Author name placeholder
                </td>
                <td class="px-6 py-4">
                    Reviewer name placeholder
                </td>
                <td class="px-6 py-4">
                    2024/01/01
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Title name placeholder
                </th>
                <td class="px-6 py-4">
                    Author name placeholder
                </td>
                <td class="px-6 py-4">
                    Reviewer name placeholder
                </td>
                <td class="px-6 py-4">
                    2024/01/01
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Title name placeholder
                </th>
                <td class="px-6 py-4">
                    Author name placeholder
                </td>
                <td class="px-6 py-4">
                    Reviewer name placeholder
                </td>
                <td class="px-6 py-4">
                    2024/01/01
                </td>
            </tr>
        </tbody>
    </table>
</div>

</section>

</template>
