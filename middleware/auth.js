

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'http://138.201.95.25:8000/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default defineNuxtRouteMiddleware(async (to, from) => {
  const session = supabase.auth.session;

  if (!session && to.path !== '/signup') {
    return navigateTo('/signup');
  }
});


