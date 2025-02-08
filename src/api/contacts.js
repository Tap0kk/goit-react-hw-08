import { authInstance } from './auth';

export const getAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');

  return data;
};

export const postNewContact = async newContact => {
  const { data } = await authInstance.post('/contacts', newContact);

  return data;
};

export const deleteContactById = async contactId => {
  const { data } = await authInstance.delete(`/contacts/${contactId}`);

  return data;
};

export const updateContactById = async (contactId, updatedData) => {
  const { data } = await authInstance.patch(
    `/contacts/${contactId}`,
    updatedData
  );

  return data;
};
