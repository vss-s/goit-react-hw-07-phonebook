import { createSelector } from 'reselect';
import { getFilterQuery } from '../filterReducer/filterSelectors';

export const getContacts = state => state.contacts.contacts;
export const getIsLoadingStatus = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  getContacts,
  getFilterQuery,
  (contacts, filter) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
