import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos } from '../services/todoService';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

// Async thunk to fetch todos
export const loadTodos = createAsyncThunk(
    'todos/loadTodos',
    async ({ limit, page }: { limit: number; page: number }) => {
      const data = await fetchTodos(limit, page);
      return data;
    }
  );

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(loadTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to load data';
            });
    },
});

export default todoSlice.reducer;
