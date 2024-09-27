<template>
  <div>
    <form @submit.prevent="addTodo" class="flex items-center justify-center my-4 gap-2">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Enter your todo"
        class="px-4 py-2 border rounded-lg"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  props: {
    onAddTodo: {
      type: Function as PropType<(todo: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const newTodo = ref("");

    const addTodo = () => {
      if (newTodo.value) {
        console.log("masuk add");
        props.onAddTodo(newTodo.value);
        newTodo.value = "";
      }
    };

    return {
      newTodo,
      addTodo,
    };
  },
});
</script>
