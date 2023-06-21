import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReposRequest } from "../../api/requests";

export const getRepos = createAsyncThunk(
  "popular/getRepos",
  async (reposQuery, { rejectWithValue }, dispatch) => {
    try {
      return await getReposRequest(reposQuery);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
