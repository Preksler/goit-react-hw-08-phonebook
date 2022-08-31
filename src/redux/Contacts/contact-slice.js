import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from './contact-operations';

const initialState = {
    contacts: [],
    filter: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [addContact.fulfilled](state, action) {
            state.contacts = [...state.contacts, action.payload];
        },
        [getContacts.fulfilled](state, action) {
            state.contacts = action.payload;
        },
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        }
    }
});