import React, { useEffect, useState } from "react";
import type { Contact } from "../interfaces/Contact";
import { Box, Button, TextField } from "@mui/material";

interface Props { 
  // onAdd: (contact: Contact) => void;
  onAddOrUpdate: (contact: Contact) => void;
  contactToEdit?: Contact | null;

}

const ContactForm: React.FC<Props> = ({ onAddOrUpdate, contactToEdit }) => {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]
)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) return;

   onAddOrUpdate(contact);



    setContact({
   
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
   
    <Box component="form" onSubmit={handleSubmit}>
      <div >
        <TextField
          label="Name"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />

        <TextField
          label="Phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
        {contactToEdit ? "Update Contact" : "Add Contact"}
       
      </Button>
    </Box>
  );
};

export default ContactForm;