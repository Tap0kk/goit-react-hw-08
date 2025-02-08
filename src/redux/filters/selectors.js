import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts !== null)
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
      );
  }
);
