<template>
  <ul class="pagination">
    <li
      v-for="i in totalPages"
      :key="i"
      @click="changePageNumber(i)"
    >
    <a href="#"
      :class="{ active: pageNumber === i }"
    >
      {{ i }}
    </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.getters.getPageNumber;
    },
    totalPages() {
      return this.$store.state.todos.length / 10;
    }
    // todosPaginated() {
    //   return this.$store.getters.getTodos.slice(0, 10)
    // }
  },
  methods: {
    changePageNumber: function(i) {
      console.log('i', i);
      this.$store.dispatch("changePageNumber", i);
      console.log('pageN', this.pageNumber);
    },
  }
};
</script>

<style>
  ul.pagination {
      display: inline-block;
      padding: 0;
      margin: 0;
  }

  ul.pagination li {display: inline;}

  ul.pagination li a {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
  }

  ul.pagination li a.active {
      background-color: #4CAF50;
      color: white;
  }

  ul.pagination li a:hover:not(.active) {background-color: #ddd;}
</style>
