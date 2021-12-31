export const state = {
  todos: [],
  pageNumber: 1,
};

export const getters = {
  getTodos: (state) => {
    const beg = (state.pageNumber - 1) * 10;

    return state.todos.slice(beg, beg + 10);
  },
  getPageNumber: (state) => state.pageNumber,
  setTodos: (state) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        res.forEach((task) => {
          task.editing = false;
        });

        // state.pageNumber = res.length / 10;
        return (state.todos = [...res]);
      })
      .catch((error) => console.log('error!', error));
  },
};

export const mutations = {
  SHOW_TODO: (state, payload) => {
    state.todos = [...payload];
  },
  SET_EDITING: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo.id === payload);
    state.todos[index].editing = !state.todos[index].editing;
    console.log('todo!', state.todos[index]);
  },
  ADD_TODO: (state, payload) => {
    const newTask = {
      id: payload.newId,
      title: payload.title,
      completed: false,
      editing: false,
    };
    state.todos.unshift(newTask);
  },
  TOGGLE_TODO: (state, payload) => {
    const item = state.todos.find((todo) => todo.id === payload);
    item.completed = !item.completed;
  },
  CHANGE_PAGE_NUMBER: (state, payload) => {
    state.pageNumber = payload;
  },
  EDIT_TODO: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo.id === payload.id);
    state.todos[index].title = payload.newTask;
  },
  DELETE_TODO: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo.id === payload);
    state.todos.splice(index, 1);
  },
};

export const actions = {
  showTodo: (context, payload) => {
    context.commit('SHOW_TODO', payload);
  },
  setEditing: (context, payload) => {
    context.commit('SET_EDITING', payload);
  },
  changePageNumber: (context, payload) => {
    context.commit('CHANGE_PAGE_NUMBER', payload);
  },
  addTodo: (context, payload) => {
    context.commit('ADD_TODO', payload);
  },
  toggleTodo: (context, payload) => {
    context.commit('TOGGLE_TODO', payload);
  },
  editTodo: (context, payload) => {
    context.commit('EDIT_TODO', payload);
  },
  deleteTodo: (context, payload) => {
    context.commit('DELETE_TODO', payload);
  },
};
