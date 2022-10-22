import {createSlice} from "@reduxjs/toolkit";

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        user:{}
    },
    reducers: {
         // Signup
         signup: (state, action) => {
            
            let {id, username, email, password_digest} = action.payload.payload;
            state.status = true
            state.user = {id,
                          username, 
                          email,
                          password: password_digest
            }
            console.log(state.user)
           
        },
        // Login
        login: (state, action) => {
            let { username, email, password_digest} = action.payload.payload;
            state.status = true
            state.user = {username, email, password: password_digest}
            
        },
       
        // Logout
        logout: (state) => {
            state.status = false
            state.user = {}
        }
    }
})

export const { signup, login} = userSlice.actions;
const userReducer = userSlice.reducer
export default userReducer
