<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/Navbar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>
