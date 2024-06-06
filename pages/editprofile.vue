
<template>
  <div class="w-full min-h-screen bg-gray-200">
    <div class="max-w-4xl mx-auto p-4 md:p-8">
      <div class="bg-white p-5 shadow-sm rounded-sm">
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-4">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span class="tracking-wide">Edit Profile</span>
        </div>

        <form @submit.prevent="updateUserProfile" class="grid grid-cols-1 gap-4 text-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="px-4 py-2 font-semibold">Full Name:</div>
            <input v-model="user.fullName" class="border px-4 py-2" type="text">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="px-4 py-2 font-semibold">Email:</div>
            <input v-model="user.email" class="border px-4 py-2" type="email" disabled>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="px-4 py-2 font-semibold">Institution:</div>
            <input v-model="user.Institution" class="border px-4 py-2" type="text">
          </div>

          <div class="col-span-1 md:col-span-2 flex flex-col">
            <div class="px-4 py-2 font-semibold">Biography:</div>
            <textarea v-model="user.Bio" class="px-4 py-2 border w-full" type="text"></textarea>
          </div>

          <div class="col-span-1 md:col-span-2">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
input[disabled] {
  background-color: #e5e7eb;
}
</style>

<script setup>

definePageMeta({
  middleware: 'auth'
})

const { $supabase } = useNuxtApp();

const user = ref({
  fullName: '',
  email: '',
  Institution: '',
  Bio: ''
});

onMounted(async () => {
  const response = await $supabase.auth.getUser();
  console.log("(editprofile) User data", response.data.user.id)
  if (response.data.user) {
    const metadata = response.data.user.user_metadata;
    user.value = {
      fullName: metadata.fullName || '',
      email: response.data.user.email,
      Institution: metadata.Institution || '',
      Bio: metadata.Bio || '',
    };
  }
});

const updateUserProfile = async () => {
  const { data, error } = await $supabase.auth.updateUser({
    data: {
      fullName: user.value.fullName,
      Institution: user.value.Institution,
      Bio: user.value.Bio,
    }
  });
  if (error) {
    console.error('Update error:', error);
  } else {
    alert('Profile updated successfully!');
  }
};
</script>
