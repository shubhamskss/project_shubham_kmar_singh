import React from "react";
import {createSlice} from '@reduxjs/toolkit'
const slice=createSlice({
    name:'toogle',
    initialState:{
        items:50
    },
    reducers:{
        addLikes:(state,action)=>{
            state.items++
        },
        reduceLikes:(state,action)=>{
            state.items--
        }
    }
})
export default slice.reducer
export const {addLikes,reduceLikes}=slice.actions