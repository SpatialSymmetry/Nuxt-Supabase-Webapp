
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'http://138.201.95.25:8000/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fetchSupabase() {
  // Fetch data from Supabase
  const { data: data, error } = await supabase.from('reviews').select('*')

  if (error) {
    console.error('Error fetching data:', error)
    return
  } else {
    return data
  }
}



import { MeiliSearch } from 'meilisearch';

// Configure your MeiliSearch client
const meiliSearch = new MeiliSearch({
  host: 'http://138.201.95.25:7700'
})

// Create or get an existing index
const index = await meiliSearch.index('your-index-name')

// Add or update documents in the index
const response = await index.addDocuments(await fetchSupabase())

// Define your settings
const settings = {
  displayedAttributes: ['*'],
  searchableAttributes: ['title', 'authors', 'comment', 'created_at', 'reviewer' ],

  filterableAttributes: [
    'title',
    'authors',
    'reviewer',
    'analytical_tools',
    'case_study',
    'fields',
    'geoscope',
    'ref_typography',
    'relevance',
    'research_method',
    'source_typography',
    'trend_keywords',
    'geoscope'
  ],
  sortableAttributes: ['created_at'],
  rankingRules: ['words', 'typo', 'proximity', 'attribute', 'sort', 'exactness'],
  stopWords: [],
  synonyms: {},
  distinctAttribute: null,
  typoTolerance: {
    enabled: true,
    minWordSizeForTypos: { oneTypo: 5, twoTypos: 9 },
    disableOnWords: [],
    disableOnAttributes: []
  },
  faceting: { maxValuesPerFacet: 100, sortFacetValuesBy: { '*': 'alpha' } },
  pagination: { maxTotalHits: 1000 }
};

// Update index settings
await index.updateSettings(settings);

// Optionally, fetch and log the updated settings to verify
const settingsLog = await index.getSettings();
console.log(settingsLog);


