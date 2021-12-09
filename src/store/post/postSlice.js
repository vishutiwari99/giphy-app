import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  desc: "",
  url: "",
  gif: false,
  posts: [
    {
      id: 0,
      desc: "Good Morning Friends.:)",
      url: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    uploadPost: (state, action) => {
      const post = action.payload;
      state.posts.unshift(post);
    },

    setId: (state, action) => {
      state.id = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setDesc: (state, action) => {
      state.desc = action.payload;
    },
    setGif: (state, action) => {
      state.gif = action.payload;
    },
  },
});

export const { uploadPost, setId, setUrl, setDesc, setGif } = postSlice.actions;

export default postSlice.reducer;
