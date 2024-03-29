
<script setup>

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://lptqhmbbucinhiohuizg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdHFobWJidWNpbmhpb2h1aXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzMTk1MjksImV4cCI6MjAyNjg5NTUyOX0.fSPt6aAAydTx0AUNzdOSePSt9chLQ5cvC8F-WmumJbs')

async function insDatabase(a, b, c){
  const { data, error } = await supabase
  .from('reviews')
  .insert([
  { title: a, author: b, reviewer: c },
  ])
  .select()
}

import { defineProps } from 'vue';
const props = defineProps();


const handleSubmit = (event) => {
  const name = event.target.elements.nameInput.value;
  const email = event.target.elements.emailInput.value;

  console.log('Name:', name);
  console.log('Email:', email);

  // You can store the values in variables or perform further processing here
async function insDatabase(a, b, c){
  const { data, error } = await supabase
  .from('reviews')
  .insert([
  { title: a, author: b, reviewer: c },
  ])
  .select()
}
insDatabase(name, email, "Poya Sohrabi")

};

</script>



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

<section class="w-full bg-gray-200 text-white pt-9 pb-36">
  <div class="max-w-screen-lg mx-auto p-16 bg-gray-900 rounded-lg">
    <p class="mb-4 text-xl font-bold">TREnD Litrature Review Form</p>
    <form @submit.prevent="handleSubmit">
      <p class="py-4 text-gray-400">Note: Your credentials such as your name and institution will be loaded from your user profile.</p>
      <div class="grid gap-4">

        <div>
          <label class="block mb-2 text-sm font-medium" >Title</label>
          <input type="text" id="nameInput" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm placeholder:text-gray-400 text-white" placeholder="Type" required>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium">Author(s)</label>
          <input type="text" id="emailInput" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm placeholder-gray-400 text-white" placeholder="Type" required>
        </div>

        <div>
          <label for="category" class="block mb-2 text-sm font-medium">Source Typology</label>
          <select id="category" class="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm
            placeholder-gray-400">
            <option selected="">Select</option>
            <option value="TV">Journal Article</option>
            <option value="TV">Book Chapter</option>
            <option value="TV">Book</option>
            <option value="PC">Review (book)</option>
            <option value="GA">Editorial</option>
            <option value="GA">Conference Proceedings</option>
            <option value="GA">Thesis/Dissertations</option>
            <option value="GA">Working Paper</option>
            <option value="GA">Official Report</option>
            <option value="GA">Other (Specify)</option>
          </select>
        </div>

        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Citation (MLA)</label>
          <input type="text" name="name" id="name" class=" block w-full p-2.5 bg-gray-700 border border-gray-600
          rounded-lg text-sm text-gray-900 placeholder-gray-400" placeholder="Paste here">
        </div>

        <div>
          <label for="category" class="block mb-2 text-sm font-medium">Geographical Scope</label>
          <select id="category" class="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm
            placeholder-gray-400">
            <option selected="">Select</option>
            <option value="TV">EU</option>
            <option value="TV">United States</option>
            <option value="TV">National</option>
            <option value="PC">Regional</option>
            <option value="GA">Local</option>
          </select>
        </div>

        <div>
          <label for="category" class="block mb-2 text-sm font-medium">Degree of Relevence</label>
          <select id="category" class="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm
            placeholder-gray-400">
            <option selected="">Select</option>
            <option value="TV">Low</option>
            <option value="TV">Moderate</option>
            <option value="TV">High</option>
          </select>
        </div>

        <div>
          <label for="category" class="block mb-2 text-sm font-medium">Reference Typology</label>
          <select id="category" class="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm
            placeholder-gray-400">
            <option selected="">Select</option>
            <option value="TV">Theoretical</option>
            <option value="TV">Litrature Review Analysis</option>
            <option value="TV">Methodology</option>
            <option value="PC">Bases Practices and/or Case Studies</option>
            <option value="GA">Policy Recommendation</option>
            <option value="GA">Policy Analysis</option>
            <option value="GA">Other (Specify)</option>
          </select>
        </div>

        <div class="col-span-2 flex flex-col my-10">
          <p class="font-semibold "> Reference Keywords in accordance with the TREnD Project (Check as many as applies).</p>
          <div class="mt-2 flex gap-4 flex-wrap">

          <div v-for="entry in ['Shock', 'Innovation', 'Evolutionary Economy',
            'Spatial Planning', 'Knowledge Economy', 'Regional Economic variety related/unrelated',
            'Reselience building process', 'Reselience Strategies', 'Path Dependency', 'Path Reshaping',
            'Transition Managment Strategies', 'Co-evolutionary process', 'Strategy/Tactic Approach',
            'Urban Transition Managment', 'Risk Management', 'Local Transformation', 'Innovative Ecosystem']"
            class="flex items-center" >
            <input type="checkbox" class="w-4 h-5 text-blue-600 rounded
            focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600">
            <label class="ms-2 text-sm font-bold text-gray-300">{{entry}}</label>
          </div>

          </div>
        </div>

        <p class="font-semibold col-span-2"> Key fields of investigation (Check as many as applies and write a note).</p>
        <div class="col-span-2"   v-for="entry in ['Economic Resilience', 'Technological Resilience', 'Urban Resiliecne',
          'Governance', 'Policy', 'Strategy (Place-based Approach, Place-sensitive Appraoch, Other)', 'Spatial Planning',
          'Cluster', 'Knowledeg Complexity', 'Global Market Power', 'Quality of life', 'Inequalities', 'Competitve Advantage',
          'Core/Peripheral areas', 'Advanced/Lagging regions-cities', 'Urbran Transition', 'Local Transformations',
          'Environemnt Risks', 'Other (Specify)']">
          <div class="flex mb-2">
            <p class="text-white text-sm font-medium">{{entry}}</p>
            <input type="checkbox" class="w-4 h-5 ml-2 bg-gray-700 text-sm text-gray-900">
          </div>
          <textarea rows="1" class="p-2 w-full text-sm rounded-lg border focus:ring-primary-500
            focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
            focus:ring-primary-500 focus:border-primary-500" placeholder="Write a note..."></textarea>
        </div>

        <form class="col-span-2">
          <p class="mb-2 text-sm font-medium text-white">Upload the document</p>
          <input class="w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700
          border-gray-600 placeholder-gray-400" type="file">
        </form>


        <div class="col-span-2">
          <label class="text-sm font-medium text-white">Comment</label>
          <textarea rows="8" class="p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500
            focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
            focus:ring-primary-500 focus:border-primary-500" placeholder="Your comment here"></textarea>
        </div>

      </div>

      <button type="submit" class="px-5 py-2.5 mt-4 border rounded-lg  inline-flex items-center text-sm font-medium text-center">
        Add to database
      </button>
      <button type="reset" class="px-5 py-2.5 mt-4 ml-3 border rounded-lg  inline-flex items-center text-sm font-medium text-center">
        Clear all
      </button>

    </form>
  </div>
</section>


</template>
