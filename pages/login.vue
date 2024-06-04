

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200 px-4">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-center text-xl tracking-tight">TREnD Litrature Review Portal Login.</h1>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" v-model="email" required 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" v-model="password" required 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log In
          </button>
        </div>

        <p class="text-sm text-center">If you don't have an account,
        <NuxtLink to="/signup" class="text-indigo-600 hover:text-indigo-500">Sign Up</NuxtLink>.
        </p>

        <p class="text-sm text-center">
        <NuxtLink to="/forgotpassword" class="text-indigo-600 hover:text-indigo-500">Forgot Password?</NuxtLink>
        </p>

      </form>
    </div>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

definePageMeta({
  layout: ''
})

// Supabase client setup
const supabaseUrl = 'https://tirgpitrrqhxamhohmxe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcmdwaXRycnFoeGFtaG9obXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MDY5MDgsImV4cCI6MjAyNzI4MjkwOH0.p8PK1g_wW5lG12NS7apvLqX8Iu5Rl-PaHyzlqlWpXN4'
const supabase = createClient(supabaseUrl, supabaseKey)

const router = useRouter()
const email = ref('')
const password = ref('')
const authError = ref('')

async function login() {
  const { user, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  })
  if (error) {
    authError.value = error.message
  } else {
    router.push('/')
  }
}

console.log(authError)
</script>



