import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './recipeSlice'
const Store = configureStore({
    reducer:{
        recipe:recipeSlice
    }
})

export default Store