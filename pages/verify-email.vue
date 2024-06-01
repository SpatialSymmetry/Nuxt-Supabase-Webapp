
<template>
  <div class="w-full h-screen bg-gray-200 flex items-center justify-center">
    <div class="max-w-md w-full p-8 bg-white shadow-md text-center">
      <h1 class="text-xl font-bold mb-8">Email Verification</h1>
      <p v-if="verified" class="text-green-600">Your email has been successfully verified!</p>
      <p v-if="error" class="text-red-600">{{ errorMessage }}</p>
      <p v-if="!verified && !error">Please check your email to verify your account.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tirgpitrrqhxamhohmxe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcmdwaXRycnFoeGFtaG9obXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MDY5MDgsImV4cCI6MjAyNzI4MjkwOH0.p8PK1g_wW5lG12NS7apvLqX8Iu5Rl-PaHyzlqlWpXN4'
const supabase = createClient(supabaseUrl, supabaseKey)

const verified = ref(false)
const error = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  // Note: Nuxt 3 does not support accessing query params directly in setup due to SSR
  const route = useRoute()
  const token = route.query.token
  if (token) {
    const { error: verifyError } = await supabase.auth.verifyEmail({ token })
    if (verifyError) {
      error.value = true
      errorMessage.value = verifyError.message
    } else {
      verified.value = true
    }
  }
})
</script>

