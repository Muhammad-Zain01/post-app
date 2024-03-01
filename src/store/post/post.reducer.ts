import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeelingObject } from "../../components/post-modal.component";
import { UUID } from "../../lib/utils";

export type Comments = {
  id: string;
  user: string;
  comment: string;
  time: string;
};

export type PostPayload = {
  id: string;
  post: string;
  feeling: FeelingObject;
  time: string;
  author: string;
  isLiked: boolean;
  comments: Comments[];
};

type SliceState = {
  posts: PostPayload[];
};
const INITIAL_STATE: SliceState = {
  posts: [],
};
export const postSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    addPost(state, action: PayloadAction<PostPayload>) {
      state.posts = [...state.posts, action.payload];
    },
    editPost(state, action: PayloadAction<PostPayload>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...action.payload };
      }
    },
    addComment(state, action: PayloadAction<{ id: string; comment: string }>) {
      const { id, comment } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.comments.push({
          id: UUID(),
          user: "Muhammad Zain",
          comment: comment,
          time: new Date().toString(),
        });
      }
    },
    editComment(
      state,
      action: PayloadAction<{ id: string; commentId: string; comment: string }>
    ) {
      const { id, comment, commentId } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.comments = post.comments.map((item) => {
          if (item?.id == commentId) {
            return { ...item, comment: comment };
          }
          return item;
        });
      }
    },
    removeComment(
      state,
      action: PayloadAction<{ postid: string; commentid: string }>
    ) {
      const { postid, commentid } = action.payload;
      const post = state.posts.find((post) => post.id === postid);
      if (post) {
        post.comments = post?.comments?.filter(
          (comment) => comment.id != commentid
        );
      }
    },
    removePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
  },
});

export const {
  addPost,
  addComment,
  removePost,
  editPost,
  editComment,
  removeComment,
} = postSlice.actions;
export const postReducer = postSlice.reducer;