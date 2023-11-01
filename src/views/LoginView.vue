<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const username = ref('');
const password = ref('');

function login(event) {
  if ('Artis' !== username.value || 'Parole' !== password.value) {
    alert('Invalid credentials');
    event.preventDefault();

    return;
  }

  sessionStorage.setItem('logged-in', username.value);

  router.push('/data');
}
</script>

<template>
  <main>
    <div>
      <form @submit="login">
        <label>Username</label>
        <input type="text" v-model="username" />

        <label>Password</label>
        <input type="password" v-model="password" />

        <input type="submit" value="Submit">
      </form>
    </div>
  </main>
</template>
