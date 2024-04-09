import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { clearAll } from './clear';
import type { UserPayload } from '../../types/user'; 

const initialState: UserPayload = {
	name: '',
	age: null,
	gender: '',
	height: null,
	weight: null,
	nationality: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(clearAll, () => initialState);
  },
  reducers: {
    updateUser: (_, action: PayloadAction<UserPayload>) => ({
      ...action.payload,
    }),
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    updateGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
		},
		updateHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
		},
		updateWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
		},
		updateNationality: (state, action: PayloadAction<string>) => {
      state.nationality = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const {
	updateUser,
	updateName,
	updateAge,
	updateGender,
	updateHeight,
	updateWeight,
	updateNationality,
} = userSlice.actions;

export default userSlice.reducer;