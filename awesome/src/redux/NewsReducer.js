const SHOW_NEWS = "SHOW-NEWS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newsData: [
    { id: 1, message: "Hi , it is my first post", likeCount: 120000 },
    { id: 2, message: "Hi , it is my second post", likeCount: 564 },
    { id: 3, message: "Hi , it is my third post", likeCount: 321 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    { id: 4, message: "Hi , it is my four post", likeCount: 890 },
  ],
};

const newsReducer = (state = initialState, action) => {
  // return {
  //   ...state,
  //   newPostText: "",
  //   postsData: [...state.postsData, newPost],
  // };

  return { ...state };
};

// export const addPostCreator = () => {
//   return {
//     type: SHOW_NEWS,
//   };
// };

export default newsReducer;
