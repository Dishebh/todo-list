<template>
  <div class="container">
    <h1>Todo List</h1>
    <div id="app">
      <div>
        <TodoNew />
        <TodoList />
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import TodoNew from "@/components/TodoNew.vue";
import TodoList from "@/components/TodoList.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    TodoNew,
    TodoList,
    Pagination
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  /* height: 100%; */
  color: #333;

}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: max(50%, 34em);
  margin: auto;
  margin-top: 2em;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  margin-top: 0;
}

.vue-logo {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
