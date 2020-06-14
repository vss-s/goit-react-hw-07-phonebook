import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apiActions from '../../Api/apiActions';
import contactOperationsTypes from './contactOperationsTypes';

export const getAllContactsOpertation = createAsyncThunk(
  contactOperationsTypes.getAllContacts,
  async (usersParams, thunkApi) =>
    apiActions
      .getContacts()
      .then(contacts => contacts)
      .catch(error => thunkApi.rejectWithValue(error)),
);

export const postNewContactOpertation = createAsyncThunk(
  contactOperationsTypes.postNewContact,
  async (newContact, thunkApi) =>
    apiActions
      .addNewContact(newContact)
      .then(data => data)
      .catch(error => thunkApi.rejectWithValue(error)),
);

export const deleteContactOpertation = createAsyncThunk(
  contactOperationsTypes.deleteContactOpertation,
  async (id, thunkApi) =>
    apiActions
      .deleteContact(id)
      .then(() => id)
      .catch(error => thunkApi.rejectWithValue(error)),
);
