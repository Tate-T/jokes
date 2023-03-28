import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const requestJokes = createAsyncThunk('jokes/get', async (_, thunkApi) => {
    const {data} = await axios.get('https://official-joke-api.appspot.com/jokes/ten')
    return data

})

export const requestRefreshJokes = createAsyncThunk(
    'jokes/refresh', 
    async (_, thunkApi) => {
    const {data} = await axios.get('https://official-joke-api.appspot.com/jokes/ten')
    const jokes = thunkApi.getState().jokes.jokes;
    const jokesIds = jokes.map(joke => joke.id);//['1' ,'2', '3'] -> {id: '3', ...} 
    const hasDublicates = !data.every(newJoke => !jokesIds.includes(newJoke.id))
    
    if(hasDublicates) {
        thunkApi.dispatch(requestRefreshJokes())
        return thunkApi.rejectWithValue(false);
    };

    return data

})

const initialState = {
    jokes: [],
    favJokes: [],
    isLoading: false,
}

const jokesSlice = createSlice({
    name: "jokes",
    initialState,
    reducers: {
        addJoke: (state, {payload}) => {
            state.favJokes = [...state.favJokes, payload];
        },
        deleteJoke: (state, {payload}) => {
            state.favJokes = state.favJokes.filter(joke => joke.id !== payload.id)
        },
    },
    extraReducers: (builder) => builder
    .addCase(requestJokes.pending, (state, action) => {
        state.isLoading = true;
    })
    .addCase(requestJokes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jokes = action.payload
    })
    .addCase(requestRefreshJokes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jokes = [...state.jokes, ...action.payload]
    })

})


export const { addJoke, deleteJoke} = jokesSlice.actions;
export default jokesSlice.reducer;