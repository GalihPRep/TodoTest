export const createTodo = (todo) => ({
    type: "CREATE_TODO",
    payload: todo
});

export const updateTodo = (todo) => ({
    type: "UPDATE_TODO",
    payload: todo
});

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
});


export const filterTodo = (option) => ({
    type: "FILTER_TODO",
    payload: option
});






export const createTodoSaga = (todo) => ({
    type: "CREATE_TODO_SAGA",
    payload: todo
});

export const updateTodoSaga = (todo) => ({
    type: "UPDATE_TODO_SAGA",
    payload: todo
});

export const deleteTodoSaga = (id) => ({
    type: "DELETE_TODO_SAGA",
    payload: id
});
export const filterTodoSaga = (option) => ({
    type: "FILTER_TODO_SAGA",
    payload: option
});