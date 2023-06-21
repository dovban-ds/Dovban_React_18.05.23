import { createSlice } from "@reduxjs/toolkit";
import { getFullData, getTrueData } from "./battle.thunk";

const initialState = {
  loading: true,
  trueData: [],
  fullData: {},
  data: {
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null,
  },
};

const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    updatePlayerData: (state, action) => {
      const { id, name, image } = action.payload;
      state.data[id + "Name"] = name;
      state.data[id + "Image"] = image;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrueData.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getTrueData.fulfilled, (state, { payload }) => {
      state.loading = true;
      state.trueData = payload;
    });

    builder.addCase(getTrueData.rejected, (state, { payload }) => {
      state.loading = false;
    });

    builder.addCase(getFullData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getFullData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.fullData = payload.data;
    });

    builder.addCase(getFullData.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { updatePlayerData } = battleSlice.actions;

export default battleSlice.reducer;
