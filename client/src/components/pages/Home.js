import React from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contactsForm';
import ContactFilter from '../contacts/contactsFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;