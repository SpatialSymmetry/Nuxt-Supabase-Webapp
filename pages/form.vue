
<template>
  <div class="w-full bg-gray-200 pt-1 pb-10">
    <div class="max-w-screen-lg mx-auto">
      <div class="bg-gray-700 text-gray-100 m-5 p-5 rounded-lg shadow-lg">

        <div class="text-center my-10">
          <p class="font-extrabold tracking-tight text-4xl mb-2">ECO-SET Litrature Form.</p>
          <p class="sm:px-16 xl:px-44 text-gray-400">Your information, including your name and institution, will be automatically retrieved from your user profile. Each note section is expandable; simply drag the bottom-right corner downward to adjust the size.</p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-4 lg:mx-10">

          <!-- Title -->
          <div class="flex flex-col">
            <label class="mb-2 text-gray-200 font-medium">Title</label>
            <input v-model="form.title" type="text" class="bg-gray-300 rounded p-2 text-gray-700" placeholder="Enter title name" required>
          </div>

          <!-- Authors -->
          <div>
            <label class="block text-gray-200 font-medium mb-2">Authors</label>
            <div class="flex gap-4 items-center">
              <input type="text" v-model="newAuthor" placeholder="Enter author's name" class="bg-gray-300 rounded p-2 text-gray-700 flex-1">
              <button @click.prevent="addAuthor" type="button" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add
              </button>
            </div>
            <div class="mt-4">
              <ul class="list-disc pl-5">
                <li v-for="(author, index) in form.authors" :key="index" class="flex items-center justify-between mt-2">
                  <span class="text-gray-300">{{ author }}</span>
                  <button @click="removeAuthor(index)" class="text-red-500 hover:text-red-700 font-medium">
                    Remove
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <!-- Citation -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Citation (MLA)</label>
            <input v-model="form.citation" type="text" placeholder="Paste here" class="bg-gray-300 rounded p-2 w-full text-gray-700">
          </div>

          <!-- Geographical Scope -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Geographical Scope</label>
            <select v-model="form.geoScope" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="EU">EU</option>
              <option value="United States">United States</option>
              <option value="National">National</option>
              <option value="Regional">Regional</option>
              <option value="Local">Local</option>
            </select>
          </div>

          <!-- Source Typology -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Source Typology</label>
            <select v-model="form.srcType" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="Journal Article">Journal Article</option>
              <option value="Book Chapter">Book Chapter</option>
              <option value="Book">Book</option>
              <option value="Review">Review (book)</option>
              <option value="Editorial">Editorial</option>
              <option value="Conference Proceedings">Conference Proceedings</option>
              <option value="Thesis/Dissertations">Thesis/Dissertations</option>
              <option value="Working Paper">Working Paper</option>
              <option value="Official Report">Official Report</option>
              <option value="Other">Other (Specify)</option>
            </select>
          </div>

          <!-- Reference Typology -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Reference Typology</label>
            <select v-model="form.refType" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="Theoretical">Theoretical</option>
              <option value="Literature Review Analysis">Literature Review Analysis</option>
              <option value="Methodology">Methodology</option>
              <option value="Best Practices and/or Case Studies">Best Practices and/or Case Studies</option>
              <option value="Policy Recommendation">Policy Recommendation</option>
              <option value="Policy Analysis">Policy Analysis</option>
            </select>
          </div>


          <!-- Degree of Relevance -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Degree of Relevance</label>
            <select v-model="form.relevance" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          <!-- Case Study -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Case Study</label>
            <select v-model="form.case_study" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>

          <!-- Research Methods -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Research Methods</label>
            <select v-model="form.research_methods" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="Qualitative">Qualitative</option>
              <option value="Quantitative">Quantitative</option>
              <option value="Mixed">Mixed Methods</option>
            </select>
          </div>

          <!-- Analytical Tools -->
          <div class="mt-4">
            <label class="block text-gray-200 font-medium mb-2">Analytical Tools</label>
            <select v-model="form.analytical_tools" class="bg-gray-300 rounded p-2 w-full text-gray-700 cursor-pointer">
              <option disabled value="">Select</option>
              <option value="Spatial">Spatial</option>
              <option value="Statistics">Statistics</option>
              <option value="Network Analysis">Network Analysis</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Keywords -->
          <div class="pt-5">
            <p class="text-gray-200 font-bold mb-3">Reference Keywords in accordance with the ECO-SET Project (Check as many as applies).</p>
            <div class="flex flex-wrap gap-4">
              <div v-for="entry in trendKeywordEntries" :key="entry" class="flex items-center">
                <input type="checkbox" :id="`checkbox-${entry}`" :checked="form.trend_keywords.includes(entry)" @change="handleKeywordChange($event, entry)">
                <label :for="`checkbox-${entry}`" class="ml-2 text-gray-300">{{ entry }}</label>
              </div>
            </div>
          </div>

          <!-- Key Fields -->
          <div class="pt-5">
            <p class="text-gray-200 font-bold mb-3">Key fields of investigation (Check as many as applies and write a note).</p>
            <div v-for="(field, index) in fieldsOfInvestigation" :key="index" class="mb-4">
              <div class="flex items-center mb-2">
                <input type="checkbox" v-model="field.checked" id="field-{{ index }}">
                <label for="field-{{ index }}" class="ml-2 text-gray-300">{{ field.name }}</label>
              </div>
              <textarea rows="1" v-model="field.note" placeholder="Write a note..." class="w-full bg-gray-300 rounded p-2 text-gray-700"></textarea>
            </div>
          </div>


          <!-- Comment -->
          <div class="mt-4">
            <label for="comment" class="block text-gray-200 font-medium mb-2">Comment</label>
            <textarea id="comment" v-model="form.comment" rows="8" class="w-full p-3 bg-gray-300 text-gray-700 rounded focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>

        </form>

      </div>
    </div>
  </div>
</template>

<script setup>

const { $supabase } = useNuxtApp();
let user = ref(null);  // It's better to initialize with `null` to clearly indicate no user initially
onMounted(async () => {
  user = await $supabase.auth.getUser();
  console.log("(form) User data:", user.data.user.id)
});

definePageMeta({
  middleware: 'auth'
});

const form = ref({
  title: '',
  authors: [],
  citation: '',
  trend_keywords: [],
  geoScope: '',
  srcType: '',
  retType: '',
  relevance: '',
  comment: '',
  case_study: '',
  research_methods: '',
  analytical_tools: ''
});

const trendKeywordEntries = ref([
  'Shock', 'Innovation', 'Evolutionary Economy', 'Spatial Planning', 'Knowledge Economy',
  'Regional Economic variety related/unrelated', 'Resilience building process',
  'Resilience Strategies', 'Path Dependency', 'Path Reshaping', 'Transition Management Strategies',
  'Co-evolutionary process', 'Strategy/Tactic Approach', 'Urban Transition Management',
  'Risk Management', 'Local Transformation', 'Innovative Ecosystem', 'Urban Ecosystem Services',
  'Urban informatics', 'Eco Districts', 'Machine Learning', 'Territorial Intelligence', 'Zoning',
  'Biodiversity'
])

function handleKeywordChange(event, keyword) {
  const { checked } = event.target;
  const index = form.value.trend_keywords.indexOf(keyword);
  if (checked && index === -1) {
    form.value.trend_keywords.push(keyword);
  } else if (!checked && index !== -1) {
    form.value.trend_keywords.splice(index, 1);
  }
}

const fieldsOfInvestigation = ref([
  { name: 'Economic Resilience', checked: false, note: '' },
  { name: 'Technological Resilience', checked: false, note: '' },
  { name: 'Urban Resilience', checked: false, note: '' },
  { name: 'Governance', checked: false, note: '' },
  { name: 'Policy', checked: false, note: '' },
  { name: 'Strategy (Place-based Approach, Place-sensitive Approach, Other)', checked: false, note: '' },
  { name: 'Spatial Planning', checked: false, note: '' },
  { name: 'Cluster', checked: false, note: '' },
  { name: 'Natural Capital', checked: false, note: '' },
  { name: 'Zoning', checked: false, note: '' },
  { name: 'Quality of Life', checked: false, note: '' },
  { name: 'Ecosystem Status', checked: false, note: '' },
  { name: 'Urban Informatics', checked: false, note: '' },
  { name: 'Eco Districts', checked: false, note: '' },
  { name: 'Advanced/Lagging regions-cities', checked: false, note: '' },
  { name: 'Urban Transition', checked: false, note: '' },
  { name: 'Local Transformations', checked: false, note: '' },
  { name: 'Environment Risks', checked: false, note: '' },
]);

const newAuthor = ref('');
const addAuthor = () => {
  if (newAuthor.value.trim()) {
    form.value.authors.push(newAuthor.value.trim()); // Push to the reactive authors array
    newAuthor.value = ''; // Clear the input after adding
  }
}
const removeAuthor = (index) => {
  form.value.authors.splice(index, 1); // Remove specified author
}


const submitForm = async () => {

  // Confirmation dialog
  if (!confirm("Are you sure you want to submit?")) {
    return; // Stop the form submission if the user cancels
  }


  try {
    const { data, error } = await $supabase
      .from('reviews')
      .insert([{
        title: form.value.title,
        authors: form.value.authors,
        reviewer_id: user.data.user.id,
        reviewer: user.data.user.user_metadata.fullName,
        trend_keywords: form.value.trend_keywords,
        geoscope: form.value.geoScope,
        fields: fieldsOfInvestigation.value,
        source_typography: form.value.srcType,
        ref_typography: form.value.refType,
        relevance: form.value.relevance,
        citation: form.value.citation,
        comment: form.value.comment,
        case_study: form.value.case_study,
        research_method: form.value.research_methods,
        analytical_tools: form.value.analytical_tools
      }]);
    if (error) throw error;

    // Reset all form fields
    form.value = {
      title: '',
      authors: [],
      citation: '',
      trend_keywords: [],
      geoScope: '',
      srcType: '',
      refType: '',
      relevance: '',
      comment: '',
      case_study: '',
      research_methods: '',
      analytical_tools: ''
    };
        // Reset fields of investigation
    fieldsOfInvestigation.value.forEach(field => {
      field.checked = false;
      field.note = '';
    });

  useFetch('/api/updateIndex', { method: 'POST' })

  } catch (error) {
    console.error('Failed to submit form:', error);
  }


};

</script>
