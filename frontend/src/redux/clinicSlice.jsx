import {createSlice} from "@reduxjs/toolkit"

const clinicSlice = createSlice({
    name:'clinic',
    initialState:{
        clinicId:null
    },
    reducers:{
        setClinicId : (state,action)=>{
            state.clinicId=action.payload

        }
    }
})

export const {setClinicId}=clinicSlice.actions
export const selectClinicId = (state)=> state.clinic.clinicId
export default clinicSlice.reducer;