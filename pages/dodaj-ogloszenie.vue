<template>
  <div>
    <h2 class="mb-5 text-3xl md:text-4xl font-bold tracking-tight">Dodaj ogłoszenie</h2>
    <form @submit.prevent="addJobOffer" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="company-name">
              Nazwa Firmy
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company-name" type="text" placeholder="Nazwa Firmy" v-model="companyName">
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="company-website">
              Strona internetowa Firmy
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company-website" type="url" placeholder="Strona internetowa Firmy" v-model="companyWebsite">
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="working-policy">
              Polityka pracy
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="working-policy" v-model="remotePolicy">
              <option value="1">Tak</option>
              <option value="2">Nie</option>
          </select>
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="working-hours">
              Godziny pracy w tygodniu
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="working-hours" type="number" placeholder="Godziny pracy w tygodniu" v-model="workingHours">
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="remote-working-policy">
              Polityka pracy zdalnej
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="remote-working-policy" v-model="remoteWorkingPolicy">
              <option value="1">Tak</option>
              <option value="2">Nie</option>
          </select>
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="full-name">
              Imię i nazwisko
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full-name" type="text" placeholder="Imię i nazwisko" v-model="contactName">
      </div>

      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="email">
      </div>

      <div class="flex items-center justify-between">
          <button v-if="!loading" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Dodaj ofertę
          </button>

          <div v-if="loading" class="loading-spinner"></div>
      </div>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const companyName = ref('')
const companyWebsite = ref('')
const workingPolicy = ref('1')
const workingHours = ref('32')
const remoteWorkingPolicy = ref('1')
const contactName = ref('')
const email = ref('')

const addJobOffer = async () => {
  try {
    loading.value = true

    const offer = {
      company_name: companyName.value,
      company_website: companyWebsite.value,
      working_policy: workingPolicy.value,
      working_hours: workingHours.value,
      remote_working_policy: remoteWorkingPolicy.value,
      contact_name: contactName.value,
      email: email.value,
      created_at: new Date(),
    }

    let { error } = await supabase
      .from('offers')
      .insert(offer)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>