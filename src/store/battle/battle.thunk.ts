import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFullData } from "./battle.types";

export const getFullData = createAsyncThunk(
  "battle/getFullData",
  async (trueData: string, { rejectWithValue }): Promise<any> => {
    try {
      return await axios
        .get(`https://api.github.com/users/${trueData}`)
        .then((response) => {
          return response;
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTrueData = createAsyncThunk(
  "battle/getTrueData",
  async (location: IFullData, { rejectWithValue }): Promise<IFullData> => {
    const params = new URLSearchParams(location.search);
    const urls = [
      `https://api.github.com/users/${params.get("playerOneName")}/repos`,
      `https://api.github.com/users/${params.get("playerTwoName")}/repos`,
    ];
    const requests = urls.map((url) => axios.get(url));
    try {
      return await axios.all(requests).then((data) => {
        const firstArr = data[0].data.map((item: any) => item.stargazers_count);
        const secondArr = data[1].data.map(
          (item: any) => item.stargazers_count
        );
        return Math.max(...firstArr) > Math.max(...secondArr)
          ? [params.get("playerOneName"), Math.max(...firstArr)]
          : [params.get("playerTwoName"), Math.max(...secondArr)];
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
