<template>
  <div>
    <h1>{{ hit.title }}</h1>
    <p>{{ hit.description }}</p>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: 'auth'
})

import { useRoute } from 'vue-router';

const route = useRoute();
const hit = route.state.hit; // Access the state passed in the navigation
</script>
