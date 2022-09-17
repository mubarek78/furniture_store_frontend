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
            let { user, email, password } = action.payload;
            state.status = true
            state.user = {
                name: user,
                email: email,
                password: password,
                role: 'customer'
               
            }
           
        },
        // Login
        login: (state) => {
            state.status = true
            state.user = {
                name: 'Dummy Dum',
                email: 'dummy@yahoo.com',
                password:'123456',
                role: 'customer'
            }
            
        },
       
        // Logout
        logout: (state) => {
            state.status = false
            state.user = {}
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer
