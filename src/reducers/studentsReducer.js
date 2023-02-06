import {createSlice} from "@reduxjs/toolkit";
import { studentData } from "./studentdata";

export const studentSlice=createSlice({
    name:"student",
    initialState:{value:studentData},
    reducers:{
        addUser:(state,action)=>{
            //Write code for adding a user
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
          },
    },
});

export const {addUser,deleteUser,updateUsername} =studentSlice.actions;
export default studentSlice.reducer;