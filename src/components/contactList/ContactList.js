import React from 'react';
import ContactItem from './contactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ onFilter, onDelete }) => {
  return (
    <>
      <ul className={styles.list}>
        {onFilter.map(contact => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
