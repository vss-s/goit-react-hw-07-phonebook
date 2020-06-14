export const checkContactForUnique = (contactsArr, newContact) =>
  contactsArr.some(
    item => item.name.toLowerCase() === newContact.name.toLowerCase(),
  );
