import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeelingObject } from "../../components/post-modal.component";

type SliceState = {
  isOpen: boolean;
  post: string;
  feeling: FeelingObject;
  id: null | string;
  isEditing: boolean;
  comment: string;
  isCommentEditing: boolean;
  commentId: string | null;
};

const INITIAL_STATE: SliceState = {
  isOpen: false,
  post: "",
  feeling: {},
  isEditing: false,
  id: null,
  comment: "",
  isCommentEditing: false,
  commentId: null,
};
export const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setOpen(state: SliceState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setComment(state: SliceState, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    setPost(state: SliceState, action: PayloadAction<string>) {
      state.post = action.payload;
    },
    setFeeling(state: SliceState, action: PayloadAction<FeelingObject>) {
      state.feeling = action.payload;
    },
    initiateSave(state: SliceState) {
      state.isEditing = false;
      state.isOpen = true;
      state.post = "";
      state.feeling = {};
      state.id = null;
    },
    initiateEditComment(
      state: SliceState,
      action: PayloadAction<{ commentId: string; comment: string }>
    ) {
      state.isCommentEditing = true;
      state.commentId = action.payload.commentId;
      state.comment = action.payload.comment;
    },
    initialSaveComment(state: SliceState) {
      state.isCommentEditing = false;
      state.commentId = null;
      state.comment = "";
    },

    initiateEdit(
      state: SliceState,
      action: PayloadAction<{
        id: string;
        post: string;
        feeling: FeelingObject;
      }>
    ) {
      state.isEditing = true;
      state.isOpen = true;
      state.post = action.payload.post;
      state.feeling = action.payload.feeling;
      state.id = action.payload.id;
    },
  },
});

export const {
  setOpen,
  setComment,
  setPost,
  setFeeling,
  initialSaveComment,
  initiateEdit,
  initiateSave,
  initiateEditComment,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
