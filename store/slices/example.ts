import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExampleState {
  booleanKey: boolean;
  stringKey: string;
}

const initialState: ExampleState = {
  booleanKey: false,
  stringKey: 'some string'
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setBoolean: (state, action: PayloadAction<boolean>) => {
      state.booleanKey = action.payload;
    },
    setString: (state, action: PayloadAction<string>) => {
      state.stringKey = action.payload;
    }
  }
});

export const { setBoolean, setString } = exampleSlice.actions;
export default exampleSlice.reducer;
