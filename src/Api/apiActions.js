import axios from 'axios';

export const getContacts = () =>
  axios.get('http://localhost:5000/contacts').then(({ data }) => data);

export const addNewContact = newContact =>
  axios
    .post('http://localhost:5000/contacts', newContact)
    .then(({ data }) => data);

export const deleteContact = id =>
  axios.delete(`http://localhost:5000/contacts/${id}`);
