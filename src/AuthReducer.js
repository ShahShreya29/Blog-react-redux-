import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  isAuthenticated : false,
  user: null
}];

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUP: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { signUP, logIn } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// let data = JSON.parse(localStorage.getItem("blogs"));
// if (localStorage.getItem("blogs") !== null) {
//   console.log("Item does not exist in localstoarge");
//   var initialState = data;
// } else {
//   console.log("Item exists in localstorage");
// }

// // const initialState = [

// // ];

// const blogSlice = createSlice({
//   name: "blogs",
//   initialState,
//   reducers: {
//     addBlog: (state, action) => {
//       const newBlog = {
//         id: state.length + 1,
//         ...action.payload,
//       };
//       const allBlogs = [...state, newBlog];
//       localStorage.setItem("blogs", JSON.stringify(allBlogs));
//       return allBlogs;
//     },
//     deleteBlog: (state, action) => {
//       const id = action.payload;
//       let blogs = JSON.parse(localStorage.getItem("blogs"));
//       blogs = blogs.filter((blog) => blog.id !== +id);
//       localStorage.setItem("blogs", JSON.stringify(blogs));
//       return blogs;
//     },

//     // editBlog: (state, action) => {
//     //   const { id, ...updatedBlogData } = action.payload;
//     //   const blogIndex = state.findIndex((blog) => blog.id === id);
//     //   if (blogIndex !== -1) {
//     //     state[blogIndex] = { ...state[blogIndex], ...updatedBlogData };

//     //   }
//     // },
//     editBlog: (state, action) => {
//       const { id, ...updatedBlogData } = action.payload;
//       const blogIndex = state.findIndex((blog) => blog.id === id);
//       if (blogIndex !== -1) {
//         state[blogIndex] = { ...state[blogIndex], ...updatedBlogData };
//         localStorage.setItem("blogs", JSON.stringify(state));
//       }
//     },
//   },
// });

// export const { addBlog, deleteBlog, editBlog } = blogSlice.actions;
// export default blogSlice.reducer;
