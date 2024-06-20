
<template>


  <div class="min-h-screen bg-gray-200 px-4 flex items-center justify-center">

    <div class="max-w-md p-8 bg-white rounded-lg shadow-lg">

      <h1 class="mb-6 text-center text-xl tracking-tight">ECO-SET Litrature Review Portal Sign Up.</h1>

      <form @submit.prevent="signup" class="flex flex-col gap-2">

        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-gray-700">Enter Your Email:</label>
          <input type="email" v-model="form.email" required 
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
            focus:outline-none focus:border-indigo-500 sm:text-sm">
          <!-- <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p> -->
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Set Your Account's Password: (It has to contain atleast 8 character, upper and lower case letters, a number and a symbol.)</label>
          <input type="password" v-model="form.password" required 
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="flex flex-col gap-2">
          <p class="mt-3 block text-sm font-medium text-gray-700">Verify Your Password</p>
          <input type="password" v-model="form.password_confirm"
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="flex flex-col gap-2">
          <p class="mt-3 block text-sm font-medium text-gray-700">Your Full Name</p>
          <input type="password" v-model="form.fullname"
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="flex flex-col gap-2">
          <p class="mt-3 block text-sm font-medium text-gray-700">Your University/Institution</p>
          <input type="password" v-model="form.institution"
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm">
        </div>



        <div>
          <!-- <button type="submit" :disabled="!isEmailValid" -->
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
            font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </div>

        <p class="text-sm text-center">Already have an account?
        <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500">Log In</NuxtLink>
        </p>

      </form>

    </div>

  </div>
</template>

<script setup>


const { $supabase } = useNuxtApp();

const form = ref({
  email: '',
  password: '',
  password_confirm: '',
  fullname: '',
  institution: '',
  bio: '',
});

async function signup() {
    const { user, error } = await $supabase.auth.signUp({
      email: form.value.email,
      password: form.value.password,
      options:{
        data:{
          fullname: form.value.fullname,
          institution: form.value.institution,
          bio: form.value.bio,
        }
      }
    })
    console.log(form.value.email)
    if (error){
    console.log(error)
    }
}

</script>

