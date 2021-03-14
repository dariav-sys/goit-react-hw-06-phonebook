import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import types from './phonebook.types';

const addContact = createAction(types.ADD_CONTACT, ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction(types.DELETE_CONTACT);
const changeFilter = createAction(types.CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
