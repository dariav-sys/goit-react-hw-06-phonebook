import React, { Component } from 'react';

import ContactForm from './components/contactForm';
import Filter from './components/filter';
import ContactList from './components/contactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    console.log('AddContact');
    const contactExist = this.state.contacts.find(
      el => el.name === contact.name || el.number === contact.number,
    );
    if (contactExist) {
      alert('Contact already exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterBy = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized),
    );
  };

  deleteContact = id => {
    this.setState(prevState => {
      const index = prevState.contacts.findIndex(item => item.id === id);
      const contacts = [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ];
      return { contacts };
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">The Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.filterBy} />
        <ContactList
          onFilter={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
