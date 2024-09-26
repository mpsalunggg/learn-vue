<template>
  <nav class="w-full bg-black text-white text-center py-2">
    <ul class="flex space-x-4 justify-center">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import router from "../router/router";

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
