<template>


<!-- Hero Section -->
<section class="w-full bg-gray-200 pt-20 pb-12 lg:pt-36 lg:pb-24">
  <div class="max-w-screen-lg mx-auto text-center px-4">
    <p class="font-extrabold tracking-tight text-gray-900 text-5xl">TREnD Litrature Review Portal.</p>
    <p class="mt-4 mb-8 sm:px-16 xl:px-48 text-gray-600">The platform is mainly based on the TREnD literature review form (LRF) which aims to provide structured and coherent information on the references examined with respect to TREnDs’ key topics to build a structured and solid literature review.</p>
    <NuxtLink to="guidelines" class="inline-flex justify-center items-center border border-gray-300 rounded-lg py-3 px-5 text-base font-medium">
    <svg class="w-5 h-5 mr-2" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <p>Read the Guidelines</p>
    </NuxtLink>
  </div>

</section>

<section class="w-full bg-gray-200">
  <div class="max-w-screen-lg mx-auto text-center px-4">
  <button @cliick="toggleSearchType"
    class="text-gray-200 p-2 border border-gray-200 rounded-lg bg-gray-900"><span class="font-bold">Search Mode:</span> {{ googleScholar ? 'Google Scholar' : 'Local TREnD Search' }}</button>
  </div>
</section>


<section v-if="googleScholar" class="w-full min-h-screen bg-gray-200 py-10">
  <div class="lg:w-3/4 max-w-screen-md mx-auto ">
    <form @submit.prevent="handleSearch" class="mx-5 flex gap-2">
      <input type="text" v-model="query" placeholder="Redirected to scholar.google.com"
      class="w-full border border-gray-300 rounded-md p-2 pl-4 focus:outline-none">
      <button @click="submit" class="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded hover:cursor-pointer">Search</button>
    </form>
  </div>
</section>



<section v-else class="w-full bg-gray-200 min-h-screen">


    <ais-instant-search :search-client="searchClient" index-name="your-index-name" class="max-w-screen-lg mx-auto p-4">

    <ais-configure :hitsPerPage="10">
    </ais-configure>

    <div class="flex flex-col lg:flex-row">

      <!-- Main Search Section -->
      <div class="lg:w-3/4 mx-auto">

        <div class="flex my-3 gap-2">
          <ais-search-box placeholder="Leave empty to get all entries." :class-names="{
          'ais-SearchBox': 'w-full border border-gray-300 rounded-md',
          'ais-SearchBox-form': 'flex',
          'ais-SearchBox-input': 'w-full p-2 border rounded-lg',
          'ais-SearchBox-submit': 'hidden',
          'ais-SearchBox-submitIcon': '',
          'ais-SearchBox-reset': '',
          'ais-SearchBox-resetIcon': 'hidden',
          'ais-SearchBox-loadingIndicator': 'hidden',
          'ais-SearchBox-loadingIcon': 'hidden'
          }">
          </ais-search-box>

          <!-- Filters Toggle Button -->
          <div @click="toggleFilters" class="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded hover:cursor-pointer">
            {{ showFilters ? 'Hide' : 'Filters' }}
          </div>
        </div>

        <div v-if="showFilters" class="bg-gray-700 text-gray-100 border rounded-lg p-4 mb-4 flex flex-col gap-5">


          <div>
            <p class="font-bold">Filter by Author:</p>
            <ais-refinement-list 
              attribute="authors"
              operator="and"
              searchable="true"
              searchable-placeholder="Search"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': 'rounded-md bg-white p-1 m-1',
                'ais-SearchBox-input': 'w-full focus:outline-none caret-black text-gray-600 pl-2',
                'ais-SearchBox-submit': 'hidden',
                'ais-SearchBox-submitIcon': 'hidden',
                'ais-SearchBox-reset': 'hidden',
                'ais-SearchBox-resetIcon': 'hidden',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>

          <div>
            <p class="font-bold">Filter by Reviewer:</p>
            <ais-refinement-list 
              attribute="reviewer"
              operator="or"
              searchable="true"
              searchable-placeholder="Search"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': 'rounded-md bg-white p-1 m-1',
                'ais-SearchBox-input': 'w-full focus:outline-none caret-black text-gray-600 pl-2',
                'ais-SearchBox-submit': 'hidden',
                'ais-SearchBox-submitIcon': 'hidden',
                'ais-SearchBox-reset': 'hidden',
                'ais-SearchBox-resetIcon': 'hidden',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>


          <div>
            <p class="font-bold">Filter by TREnD Keywords:</p>
            <ais-refinement-list 
              attribute="trend_keywords"
              operator="and"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>


          <div>
            <p class="font-bold">Filter by TREnD Fields of Investigation:</p>
            <ais-refinement-list 
              attribute="fields"
              operator="and"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>

          <div>
            <p class="font-bold">Filter by Source Typography:</p>
            <ais-refinement-list 
              attribute="source_typography"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>

          <div>
            <p class="font-bold">Filter by Reference Typology:</p>
            <ais-refinement-list 
              attribute="ref_typography"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>

          <div>
            <p class="font-bold">Filter by Research Method:</p>
            <ais-refinement-list 
              attribute="research_method"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>

          <div>
            <p class="font-bold">Filter by Analytical Tools:</p>
            <ais-refinement-list 
              attribute="analytical_tools"
              :class-names="{
                'ais-RefinementList': '',
                'ais-RefinementList--noRefinemen': '',
                'ais-RefinementList-list': 'flex flex-wrap',
                'ais-RefinementList-item': 'm-1 ',
                'ais-RefinementList-item--selected': '',
                'ais-RefinementList-label': '',
                'ais-RefinementList-labelText': '',
                'ais-RefinementList-checkbox': 'mr-1',
                'ais-RefinementList-count': 'hidden',
                'ais-RefinementList-searchBox': '',
                'ais-RefinementList-noResults': '',
                'ais-RefinementList-showMore': '',
                'ais-RefinementList-showMore--disabled': ''
              }"
            >
            </ais-refinement-list>
          </div>


          <div class="flex gap-4">
          <p class="font-bold">Case Study:</p>
          <ais-menu-select 
            attribute="case_study"
            :class-names="{
              'ais-MenuSelect': 'text-black',
              'ais-MenuSelect--noRefinement': '',
              'is-MenuSelect-select': 'border rounded-lg',
              'ais-MenuSelect-option': '',
            }"
            >
          </ais-menu-select>
          </div>

          <div class="flex gap-4">
          <p class="font-bold">Geographical Scope:</p>
          <ais-menu-select 
            attribute="geoscope"
            :class-names="{
              'ais-MenuSelect': 'text-black',
              'ais-MenuSelect--noRefinement': '',
              'is-MenuSelect-select': 'border rounded-lg',
              'ais-MenuSelect-option': '',
            }"
            >
          </ais-menu-select>
          </div>

          <div class="flex gap-4">
          <p class="font-bold">Degree of Relavaence</p>
          <ais-menu-select 
            attribute="relevance"
            :class-names="{
              'ais-MenuSelect': 'text-black',
              'ais-MenuSelect--noRefinement': '',
              'is-MenuSelect-select': 'border rounded-lg',
              'ais-MenuSelect-option': '',
            }"
            >
          </ais-menu-select>
          </div>

          <!--
          <ais-current-refinements>
          </ais-current-refinements>
          -->

          <ais-clear-refinements
            :class-names="{
              'ais-ClearRefinements': '',
              'ais-ClearRefinements-button': 'p-1 m-1 bg-blue-500 border rounded-lg hover:cursor-pointer',
              'ais-ClearRefinements-button--disabled': '',
              }"
            >
          </ais-clear-refinements>
        </div>

        <!-- Search Results -->
        <ais-hits>
          <template v-slot:item="{ item }" class="flex flex-col">
            <div class="flex flex-col border border-gray-300 p-4 mb-4 rounded-lg shadow-sm">

              <div class="flex gap-2">
                <strong>Title:</strong>
                <NuxtLink :to="`/items/${item.id}`" class="hover:text-blue-800 hover:underline">
                {{ item.title }}
                </NuxtLink>
              </div>

              <div class="flex gap-2">
                <strong>Authors:</strong>
                <div>{{ item.authors.join(', ') }}</div>
              </div>


              <div class="flex gap-2">
                <strong>Reviewer:</strong>
                <NuxtLink 
                :to="`${item.reviewer}`"
                target="_blank" rel="noopener noreferrer"
                class="hover:text-blue-800 hover:underline"
                >
                {{ item.reviewer }}
                </NuxtLink>
              </div>


              <div><strong>Comment:</strong> <ais-highlight :hit="item" attribute="comment"></ais-highlight></div>
              <div><strong>Date:</strong> {{ item.created_at.split('T')[0] }}</div>
            </div>
          </template>

        </ais-hits>

        <!-- Pagination Component -->
        <ais-pagination class="flex items-center justify-center p-4">
          <template #default="{ currentRefinement, nbPages, refine, createURL }">
            <!-- Left navigation button -->
            <button
                @click.prevent="refine(currentRefinement - 1)"
                :disabled="currentRefinement === 0"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 disabled:opacity-50"
                >
                «
            </button>

              <!-- Page numbers -->
              <a v-for="page in Array.from({ length: nbPages }, (v, k) => k + 1)"
                 :key="page"
                 :href="createURL(page)"
                 @click.prevent="refine(page)"
                 :class="[
                         'py-2 px-4 rounded mx-1',
                         {
                         'bg-blue-500 text-white': currentRefinement === page,
                         'bg-gray-300 hover:bg-gray-400 text-gray-800': currentRefinement !== page
                         }
                         ]"
                 >
                 {{ page }}
              </a>

              <!-- Right navigation button -->
              <button
                  @click.prevent="refine(currentRefinement + 1)"
                  :disabled="currentRefinement === nbPages"
                  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 disabled:opacity-50"
                  >
                  »
              </button>
          </template>
        </ais-pagination>




      </div>
    </div>
  </ais-instant-search>

</section>

</template>

<script setup>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const googleScholar = ref(false)
const query = ref('')
const toggleSearchType = () => {
  googleScholar.value = !googleScholar.value
}


const searchClient = instantMeiliSearch(
  "http://138.201.95.25:7700/",
).searchClient;

const showFilters = ref(false);
function toggleFilters() {
  showFilters.value = !showFilters.value;
}

const handleSearch = () => {
  if (googleScholar.value) {
    const baseUrl = 'https://scholar.google.com/scholar?q='
    const formattedQuery = encodeURIComponent(query.value)
    window.open(baseUrl + formattedQuery, '_blank')
  } else {
    // Implement local TREnD search logic here
    console.log("Local search for:", query.value)
  }
}

</script>



