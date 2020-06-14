import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContactsOpertation,
  postNewContactOpertation,
  deleteContactOpertation,
} from './contactOperations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    // Getting all contacts
    [getAllContactsOpertation.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getAllContactsOpertation.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      contacts: [...action.payload],
    }),
    [getAllContactsOpertation.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    // Post new contact
    [postNewContactOpertation.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [postNewContactOpertation.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      contacts: [...state.contacts, action.payload],
    }),
    [postNewContactOpertation.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    // Delete contact
    [deleteContactOpertation.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [deleteContactOpertation.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      contacts: state.contacts.filter(item => item.id !== action.payload),
    }),
    [deleteContactOpertation.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default contactSlice;
