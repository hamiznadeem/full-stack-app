import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import type { Contact } from './interfaces/Contact'
import { Container, Typography } from '@mui/material'
import {getContact, createContact, updateContact, deleteContact} from './services/contactService'

function App() {

  const [contacts, setContacts ] = useState<Contact[]>([]);

  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  useEffect(()=>{
    fetchContact();
  }, []);

  const fetchContact = async () =>{
    const res = await getContact();
    setContacts(res.data);
  }


  const handleAddOrUpdate = async (contact: FormData, id?: string) => {
  try {
    if (id) {
      await updateContact(id, contact); 
    } else {
      await createContact(contact);
    }
    fetchContact();
    setContactToEdit(null);
  } catch (error) {
    console.error("Save Error:", error);
  }
};

  const handleEditContact = (contact: Contact) => {
    setContactToEdit(contact);
  }


  const handleDeleteContact = async (id: string) => {
  await deleteContact(id);
  fetchContact();
  }
  

  return (
    <>
    <Container>
    <Typography variant='h4' align='center' sx={{mt:4, mb:4}}>
      Add Contact
    </Typography>

    <ContactForm onAddOrUpdate={handleAddOrUpdate} contactToEdit={contactToEdit} />

    <ContactList contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />

    </Container>
    </>
  )
}

export default App