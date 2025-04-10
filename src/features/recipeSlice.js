import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

var URL = "http://localhost:3000/recipe"
export const createRecipe = createAsyncThunk('add/recipe', async (data) => {
    try {
        const res = await axios.post(URL, data);
        return res.data
    } catch (error) {
        console.log('error: ', error);
    }
})

export const viewRecipe = createAsyncThunk('view/recipe', async () => {
    const res = await axios.get(URL)
    return res.data
})

export const deleteRecipe = createAsyncThunk('delete/recipe', async (id) => {
    try {
        const res = await axios.delete(`${URL}/${id}`)
        return res.data
    } catch (error) {
        console.log('error: ', error);
    }
})

export const updateRecipe = createAsyncThunk('update/recipe', async (data) => {
    const { id } = data;
    const res = await axios.put(`${URL}/${id}`, data)
    return res.data
})

const recipeSlice = createSlice({
    name: "users",
    initialState: {
        recipeList: []
    },
    extraReducers: (res) => {
        res
            .addCase(createRecipe.fulfilled, (state, action) => {
                state.recipeList.push(action.payload)
            })
            .addCase(viewRecipe.fulfilled, (state, action) => {
                state.recipeList = action.payload
            })
            .addCase(deleteRecipe.fulfilled, (state, action) => {
                const { id } = action.payload;
                const filterData = state.recipeList.filter((recipe) => {
                    return recipe.id !== id
                })
                state.recipeList = filterData
            })
            .addCase(updateRecipe.fulfilled, (state, action) => {
                const { id } = action.payload;
                // const arr = [3,4,5]
                // arr[2] = 7;
                const index = state.recipeList.findIndex((recipe)=>{
                    return recipe.id===id
                })

                if(index!=-1){
                    state.recipeList[index] = action.payload;
                }
            })
    }
})

export default recipeSlice.reducer