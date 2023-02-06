import {createSlice} from "@reduxjs/toolkit";

export const studentMarksSlice=createSlice({
    name:"studentMarks",
    initialState:[],
    reducers:{
        addMarks:(state,action)=>{
            //Write code for adding a user marks
            // state.value.push(action.payload);
            state.value[action.payload.id]=action.payload
        },
        // deleteUser: (state, action) => {
        //     state.value = state.value.filter((user) => user.id !== action.payload.id);
        //   },
      
        //   updateUsername: (state, action) => {
        //     state.value.map((user) => {
        //       if (user.id === action.payload.id) {
        //         user.username = action.payload.username;
        //       }
        //     });
        // },
    },
});

export const {addMarks} =studentMarksSlice.actions;
export default studentMarksSlice.reducer;