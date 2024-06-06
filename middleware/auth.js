


import { useNuxtApp } from '#app';

export default defineNuxtRouteMiddleware(async (to, from) => {

  const { $supabase } = useNuxtApp();

  const response = await $supabase.auth.getUser();
  const user = response.data.user

  // Check if there is no user and the target path is not the signup or login page
  if (!user && to.path !== '/signup' && to.path !== '/login') {
    return navigateTo('/signup');
  }

});

