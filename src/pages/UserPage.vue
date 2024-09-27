<script lang="ts" setup>
import { ref, watch } from 'vue';

const user = ref({
  name: 'Putra',
  address: {
    city: 'Palu',
    country: 'Indonesia'
  }
});

watch(user, (newUser, oldUser) => {
  console.log('User object changed:');
  console.log('New User:', newUser);
  console.log('Old User:', oldUser);
}, { immediate: true, deep: true });
</script>

<template>
  <div>
    <h3>Informasi Pengguna</h3>
    <p>Nama: {{ user.name }}</p>
    <p>Kota: {{ user.address.city }}</p>
    <p>Negara: {{ user.address.country }}</p>

    <input v-model="user.name" placeholder="Ubah nama pengguna" />
    <input v-model="user.address.city" placeholder="Ubah kota pengguna" />
    <input v-model="user.address.country" placeholder="Ubah negara pengguna" />
  </div>
</template>
