
<template>
  <nav class="w-full bg-gray-200">
    <div class="max-w-screen-lg mx-auto py-5 px-5 text-gray-900 font-medium flex justify-between">
      <NuxtLink to="/">ECO-SET</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/form">Form</NuxtLink>
        <NuxtLink to="/guidelines">Guidelines</NuxtLink>
      </div>

      <!-- Profile Icon and Dropdown -->
      <div class="relative">
        <button @click="toggleDropdown()" class="focus:outline-none">
          <!-- <img class="inline h-8 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&v=4"> -->
          <img class="inline h-8 rounded-full" src="/assets/profile-picture.webp">
        </button>
        <div v-show="showDropdown" class="absolute right-10 shadow-lg">
          <div class="flex flex-col p-2 text-nowrap bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
            <NuxtLink to="profile" @click="toggleDropdown()" class="p-3 text-sm bg-white hover:bg-indigo-100 focus:shadow-outline rounded-lg">View Profile</NuxtLink>
            <NuxtLink to="editprofile" @click="toggleDropdown()" class="p-3 text-sm bg-white hover:bg-indigo-100 focus:outline-none rounded-lg">Edit Profile</NuxtLink>
            <!-- <NuxtLink to="myreviews" @click="toggleDropdown" class="p-3 text-sm bg-white hover:bg-indigo-100 focus:outline-none rounded-lg">Manage Reviews</NuxtLink> -->
            <NuxtLink to="/logout" @click="toggleDropdown(), logout()" class="p-3 text-sm bg-white hover:bg-indigo-100 focus:outline-none rounded-lg">Log Out</NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </nav>

  <slot />
</template>

<script setup>

const { $supabase } = useNuxtApp();

async function logout() {
    await $supabase.auth.signOut();
}

const showDropdown = ref(false);
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>


