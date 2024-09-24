<template>
  <nav class="mb-4">
    <ul class="flex space-x-4">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import router from "./router/router";

export default defineComponent({
  setup() {
    const routes = computed(() =>
      router.getRoutes().map((route) => {
        return {
          path: route.path,
          label: route.meta.title,
        };
      })
    );

    return {
      routes,
    };
  },
});
</script>
