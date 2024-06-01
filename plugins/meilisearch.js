
// ~/plugins/meilisearch.client.js
import { MeiliSearch } from 'meilisearch';

export default defineNuxtPlugin(nuxtApp => {
  const client = new MeiliSearch({
    host: 'http://138.201.95.25:7700'
  });

  nuxtApp.provide('meili', client);
});
