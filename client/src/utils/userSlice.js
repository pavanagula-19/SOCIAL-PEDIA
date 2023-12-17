
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        data: JSON.parse(localStorage.getItem("user"))
    },
    reducers: {
        addUsers: (state, action)=>{
            state.data = action.payload
        },
        removeUser : (state)=>{
            state.data = null;
        }
    }
})

export const {addUsers,removeUser} = userSlice.actions
export default userSlice.reducer