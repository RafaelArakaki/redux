import { combineReducers } from '@reduxjs/toolkit';

import userSlicer from '../../slices/userSlice';

const userReducers = combineReducers({
  userProfile: userSlicer,
});

export default userReducers;