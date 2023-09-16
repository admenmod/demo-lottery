import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as registrationReducer } from './registration/registration.slice';


const reducers = combineReducers({
	registration: registrationReducer
});

export const store = configureStore({
	reducer: reducers
});


export type RootStore = ReturnType<typeof store.getState>;
