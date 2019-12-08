import {ADD_TODO, REMOVE_TODO, SET_FILTER, SET_TODOS} from "../actions/actions";

export const todosReducer = function (state = {
    activeFilter: "all",
    todos: [],
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };
        default:
            return state;
    }
};