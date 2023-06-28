import {
  ActionReducerMapBuilder,
  AnyAction,
  Slice,
  createSlice,
} from "@reduxjs/toolkit";
import { getFullData, getTrueData } from "./battle.thunk.ts";
import { IBattleStore, IFullData } from "./battle.types";

const initialState: IBattleStore = {
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

const battleSlice: Slice<IBattleStore> = createSlice({
  name: "battle",
  initialState,
  reducers: {
    updatePlayerData: (state: IBattleStore, action: AnyAction) => {
      const { id, name, image } = action.payload;
      state.data[id + "Name"] = name;
      state.data[id + "Image"] = image;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IBattleStore>): void => {
    builder.addCase(getTrueData.pending, (state: IBattleStore): void => {
      state.loading = true;
    });

    builder.addCase(
      getTrueData.fulfilled,
      (state: IBattleStore, { payload }: IFullData): void => {
        state.loading = true;
        state.trueData = payload;
      }
    );

    builder.addCase(getTrueData.rejected, (state: IBattleStore): void => {
      state.loading = false;
    });

    builder.addCase(getFullData.pending, (state: IBattleStore): void => {
      state.loading = true;
    });

    builder.addCase(
      getFullData.fulfilled,
      (state: IBattleStore, { payload }: IFullData): void => {
        state.loading = false;
        state.fullData = payload.data;
      }
    );

    builder.addCase(getFullData.rejected, (state: IBattleStore): void => {
      state.loading = false;
    });
  },
});

export const { updatePlayerData } = battleSlice.actions;

export default battleSlice.reducer;
