<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      class="task"
    >
    <span @click="toggleTodo(todo.id)" class="title">
      {{ todo.title }}
    </span>
      <span class="options">
        <span class="edit" @click="setEditing(todo.id)"><i class="far fa-edit"></i></span>
        <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      this.$store.getters.setTodos;
      return this.$store.getters.getTodos;
    },
    // todosPaginated() {
    //   return this.$store.getters.getTodos.slice(0, 10)
    // }
  },
  methods: {
    setEditing: function(id) {
      const newTask = prompt('Please enter new task!');
      if (newTask.length > 0) {
        this.$store.dispatch("editTodo", { id, newTask });
      }
    },
    toggleTodo: function(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    editTodo: function(id, title, completed) {
      this.$store.dispatch("editTodo", { id, title, completed });
    },
    deleteTodo: function(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    // showTodo: function() {
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    //     .then(res => console.log('res!', res))
    //     .catch(error => console.log('error!', error))
    // }
  }
};
</script>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 0.5px solid #999;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
}

.task:before {
  content: "\2002";
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.completed:before {
  content: "\2714";
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
}

.task {
  display: flex;
  justify-content: space-between;
}

.options {
  display: flex;
}

.title {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
