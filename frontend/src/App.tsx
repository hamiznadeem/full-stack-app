import { useState } from 'react'
import './App.css' 
import type { Contact } from './interfaces/Contact';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Container, Typography } from '@mui/material';


function App() {

  const [ contacts, setContacts ] = useState<Contact[]>([]);

  const [ contactToEdit, setContactToEdit ] = useState<Contact | null>(null);


  // const handleAddContact = (contact:Contact) => {
  //   setContacts([
  //     ...contacts,
  //     contact
  //   ]);
  // }

  const handleAddOrUpdate = (contact:Contact) => {
    if(contactToEdit){
      const updatedContacts = contacts.map((c) => c.id === contactToEdit.id ? contact : c);
      setContacts(updatedContacts);
      setContactToEdit(null);

    }else{
      setContacts([
        ...contacts,
        contact
      ]);
    }
  }

  const handleEditContact = (contact:Contact) => {
    setContactToEdit(contact);
  }


  const handleDeleteContact = (id:number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
  
  return (
  <>
  <Container>
    <Typography variant='h2' color='primary' align='center' sx={{mt:4, mb:4}}>
      Add Contact
    </Typography>
    
    <ContactForm onAddOrUpdate={handleAddOrUpdate} contactToEdit={contactToEdit} />
    <ContactList contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />
  </Container>
  </>
  )
}

export default App
