import { createSlice } from "@reduxjs/toolkit";


const pasteSlice = createSlice({
    name :'paste',
    initialState :{
        pastes : localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem('pastes'))
        : []
    },
    reducers:{
        setPastes : (state , action)=>{
            state.pastes = action.payload
        },
        updatePaste : (state,action)=>{

        },
        removePaste : (state , action)=>{
            
        }
    }
})

export const {setPastes , updatePaste , removePaste} = pasteSlice.actions;
export default pasteSlice.reducer;