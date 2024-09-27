<template>
  <TodoForm :onAddTodo="addTodo" />
  <TodoList :todos="todoList" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    const todoList = ref<string[]>([]);

    onMounted(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        todoList.value = JSON.parse(storedTodos);
      }
    });

    const addTodo = (todo: string) => {
      console.log("test", todo);
      todoList.value.push(todo);
      localStorage.setItem("todos", JSON.stringify(todoList.value));
    };

    return {
      addTodo,
      todoList,
    };
  },
});
</script>
