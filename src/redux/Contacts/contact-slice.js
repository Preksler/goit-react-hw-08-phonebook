import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, editContact } from './contact-operations';

const initialState = {
    contacts: [],
    filter: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        filterContacts: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [addContact.fulfilled](state, action) {
            state.contacts = [...state.contacts, action.payload];
        },
        [getContacts.fulfilled](state, action) {
            state.contacts = action.payload;
        },
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        },
        [editContact.fulfilled](state, action) {
            state.contacts = state.contacts.map(contact => {
                return contact.id !== action.payload.id
                    ? contact
                    : { ...contact, ...action.payload };
            });
        }
    }
});

export const { filterContacts } = contactsSlice.actions;