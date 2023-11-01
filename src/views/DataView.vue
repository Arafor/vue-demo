<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from "axios";

// let data = [];
let data = [
  {
    "type": "cat",
    "_id": "590b9d90229d260020af0b06",
    "user": {
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      },
      "_id": "5a9ac18c7478810ea6c06381"
    },
    "text": "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt's pharaohs."
  },
  {
    "type": "cat",
    "_id": "591f7aab0cf1d60ee8afcd62",
    "text": "The cat's clavicle, or collarbone, does not connect with other bones but is buried in the muscles of the shoulder region. This lack of a functioning collarbone allows them to fit through any opening the size of their head.",
    "user": {
      "name": {
        "first": "Alex",
        "last": "Wohlbruck"
      },
      "_id": "5a9ac18c7478810ea6c06381"
    }
  }
];
let isLoading = true;
let errorMessage = '';

onMounted(getData)

function getData() {
  isLoading = true;
  errorMessage = '';
  axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
      .then((response) => data = response.data)
      .catch((error) => errorMessage = `${error.code} ${error.message}`)
      .finally(isLoading = false)
}

</script>

<template>
  <main>
    <div>
      <h1>Data</h1>

      <button @click="getData">Get Data</button>

      <div v-if="errorMessage" class="data-view__error-message">
        {{ errorMessage }}
      </div>

      <div v-for="fact in data" :key="fact._id" class="data-view__fact">
        {{ fact.text }}
      </div>
    </div>
  </main>
</template>

<style scoped>
.data-view__error-message {
  color: red;
  margin-top: 32px;
  margin-bottom: 16px;
}

.data-view__fact {
  margin-top: 16px;
}
</style>
