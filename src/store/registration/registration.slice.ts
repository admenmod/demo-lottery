import { createSlice } from '@reduxjs/toolkit';


interface IUser {
	id: string;
	name: string;
}

interface IRegistrationState {
	registred: boolean;
	input: string;
	user: IUser | null;
}


const initialState: IRegistrationState = {
	registred: false,
	input: '',
	user: null
};

const registrationSlice = createSlice({
	initialState,
	name: 'registration',
	reducers: {
		setInput: (state, { payload: input }: { payload: string }) => {
			state.input = input;
		},
		register: (state, { payload: user }: { payload: IUser }) => {
			state.user = user;
			state.registred = true;
		}
	}
});


export const { actions, reducer } = registrationSlice;
