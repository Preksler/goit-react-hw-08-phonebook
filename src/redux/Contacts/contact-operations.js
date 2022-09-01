import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk('contacts/addContact', async credentials => {
    try {
        const { data } = await axios.post('/contacts', credentials);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async contactId => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        console.log(error.message);
    }
});

export const editContact = createAsyncThunk('contacts/editContact', async ({ id, name, number }) => {
    try {
        const { data } = await axios.patch(`/contacts/${id}`, { name, number });
        return data;
    } catch (error) {
        console.log(error.message);
    }
})

