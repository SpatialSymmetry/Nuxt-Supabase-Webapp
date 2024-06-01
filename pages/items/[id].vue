
<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <h1>{{ data.id }}</h1>
  </div>
  <div v-else>
    Loading or no data found...
  </div>
</template>

<script setup>
  
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'http://138.201.95.25:8000/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const data = ref(null);
const route = useRoute();

async function fetchData() {
  const { data: itemData, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('id', route.params.id)
    .single();

  if (error) {
    console.error('Error fetching data', error);
    return;
  }

  console.log('fetch done', itemData);  // Corrected to log the fetched data
  data.value = itemData;
}

onMounted(fetchData);

</script>

