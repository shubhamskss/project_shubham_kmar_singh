import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import slice from "./slice";
const appStore=configureStore({
    reducer:{
        toggle:slice
    }
})
export default appStore