<template>
  <div class="flex flex-col items-center">
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="mb-2 flex space-x-4">
        <span v-if="editingIndex !== index">{{ todo }}</span>
        <input
          v-if="editingIndex === index"
          v-model="editTodo"
          class="px-2 py-1 border rounded-md"
        />

        <button
          v-if="editingIndex !== index"
          @click="startEditing(index)"
          class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          v-if="editingIndex === index"
          @click="editTodoItem(index)"
          class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          @click="deleteTodoItem(index)"
          class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const editTodo = ref("");
    const editingIndex = ref<number | null>(null);

    const startEditing = (index: number) => {
      editingIndex.value = index;
      editTodo.value = props.todos[index];
    };

    const editTodoItem = (index: number) => {
      if (editTodo.value) {
        props.todos[index] = editTodo.value;
        editingIndex.value = null;
        updateTodoLocalStorage();
      }
    };

    const deleteTodoItem = (index: number) => {
      props.todos.splice(index, 1);
      updateTodoLocalStorage();
    };

    const updateTodoLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(props.todos));
    };

    return {
      editTodo,
      editingIndex,
      startEditing,
      editTodoItem,
      deleteTodoItem,
    };
  },
});
</script>
