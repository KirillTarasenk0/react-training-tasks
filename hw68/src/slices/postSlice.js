import {createSlice} from "@reduxjs/toolkit";
import {posts} from "../helpers/posts";

export const postSlice = createSlice({
   name: 'post',
   initialState: posts,
   reducers: {
      addLike: (state, action) => {
         const id = action.payload;
         let post = state.find((post) => {
            return post.id === id;
         });
         post.likes++;
      },
      addDislike: (state, action) => {
         const id = action.payload;
         let post = state.find((post) => {
            return post.id === id;
         });
         post.dislikes++;
      },
      addToFavourites: (state, action) => {
         const id = action.payload;
         let post = state.find((post) => {
            return post.id === id;
         });
         post.marked = true;
      },
      deleteFromFavourites: (state, action) => {
         const id = action.payload;
         let post = state.find((post) => {
            return post.id === id;
         });
         post.marked = false;
      },
      addVisited: (state, action) => {
         const id = action.payload;
         let post = state.find((post) => {
            return post.id === id;
         });
         post.visited++;
      }
   },
});

export const {addLike, addDislike, addToFavourites, deleteFromFavourites, addVisited} = postSlice.actions;