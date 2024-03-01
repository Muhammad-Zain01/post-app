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
    addPost(state: SliceState, action: PayloadAction<PostPayload>) {
      state.posts = [...state.posts, action.payload];
    },
    editPost(state: SliceState, action: PayloadAction<PostPayload>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...action.payload };
      }
    },
    addComment(
      state: SliceState,
      action: PayloadAction<{ id: string; comment: string }>
    ) {
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
    doLike(
      state: SliceState,
      action: PayloadAction<{ id: string; likeStatus: boolean }>
    ) {
      const { id, likeStatus } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.isLiked = likeStatus;
      }
    },
    editComment(
      state: SliceState,
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
      state: SliceState,
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
    removePost(state: SliceState, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
  },
});

export const {
  addPost,
  addComment,
  doLike,
  removePost,
  editPost,
  editComment,
  removeComment,
} = postSlice.actions;
export const postReducer = postSlice.reducer;
