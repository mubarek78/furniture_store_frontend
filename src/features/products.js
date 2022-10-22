import React, {useEffect, useState} from "react";
import {createSlice} from "@reduxjs/toolkit";
// Demo Data
import { ProductData } from '../data/productData'


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products1: [],
        products: ProductData,
        carts: ProductData.slice(3,7),
        favorites: ProductData.slice(8,12),
        compare: ProductData.slice(0,2),
        single:null,
    },
    reducers: {
                 // fetch
                 fetchData: (state, action) => {
            
                    // let {id, username, email, password_digest} = action.payload.payload;
                  
                    // state.user = {id,
                    //               username, 
                    //               email,
                    //               password: password_digest
                    // }
                    state.products1 = action.payload.payload
                    console.log(state.products1)
                   
                },
        // Get Single Product
        getProductById: (state, action) => {
            // const {id, img, title, price, group, description, rating, reviews} = action.payload;
            // console.log({id,img, title, price, group, description, rating, reviews})
            let { id } = action.payload;
            console.log(id)
            let arr = state.products.find(item => item.id == parseInt(id))
            state.single = arr
        
            
        },
        // Add to Cart
        addToCart: (state, action) =>{

            let { id } = action.payload;

            // Check existance
            let item = state.carts.find(item => item.id === parseInt(id))
            if (!item) {
                // Get Product
                let arr = state.products.find(item => item.id === parseInt(id))
                arr.quantity = 1
                state.carts.push(arr)

            }
        },
        
           
        // Update Cart
        updateCart: (state, action) =>{
            let { val, id } = action.payload;
            state.carts.forEach(item => {
                if(item.id === parseInt(id)){
                    item.quantity = val
                }
            })

        },
        // Remove Cart
        removeCart: (state, action) =>{
            let { id } = action.payload;
            let arr = state.carts.filter(item => item.id !== parseInt(id))
            state.carts = arr
            
        },
    
        // Clear Cart
        clearCart: (state) =>{
            state.carts = []
        },
        // Add to Favorite / Wishlist
        addToFav: (state, action) =>{
            let { id } = action.payload;

            // Check existance
            let item = state.favorites.find(i => i.id === parseInt(id))
            if (item === undefined) {
                // Get Product
                let arr = state.products.find(item => item.id === parseInt(id))
                arr.quantity = 1
                state.favorites.push(arr)
               
            }
        },
        // Remove from Favorite / Wishlist
        removeFav: (state, action) =>{
            let { id } = action.payload;
            let arr = state.favorites.filter(item => item.id !== id)
            state.favorites = arr
            
        },
    }

    
})


export const {fetchData, getProductById, addToCart, addToComp, addToFav, updateCart, removeCart, delCompare, clearCart, removeFav } = productsSlice.actions;
const productsReducer = productsSlice.reducer
export default productsReducer
