import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReposRequest } from "../../api/requests.ts";

export const getRepos = createAsyncThunk(
  "popular/getRepos",
  async (reposQuery: string, { rejectWithValue }): Promise<any> => {
    try {
      return await getReposRequest(reposQuery);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
