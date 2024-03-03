import { createAsyncThunk } from "@reduxjs/toolkit";
import { type } from "./postType";

import postService from "../../../services/Post/posts.service";

export const fetchPosts = createAsyncThunk(
  type,
  async (time, { rejectWithValue }) => {
    try {
        console.log(time)
      const response = await postService(time);
      // console.log(response)
      const data = response.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
