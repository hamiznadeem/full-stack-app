import React, { useEffect, useState } from "react";
import type { Contact } from "../interfaces/Contact";
import { Box, Button, TextField, Avatar, } from "@mui/material";

interface Props { 
  onAddOrUpdate: (contact: FormData, id?: string) => void;
  contactToEdit?: Contact | null;
}

const ContactForm: React.FC<Props> = ({ onAddOrUpdate, contactToEdit }) => {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
      setPreview(contactToEdit.image ? `http://localhost:3000/uploads/${contactToEdit.image}` : "");

    } else {

      setContact({ name: "", email: "", phone: "" });
      setPreview("");

    }
    setFile(null);
  }, [contactToEdit]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) return;

    const formData = new FormData();
    formData.append("name", contact.name);
    formData.append("email", contact.email);
    formData.append("phone", contact.phone);
    if (file) {
      formData.append("image", file);
    }

    onAddOrUpdate(formData, contactToEdit?._id);



    setContact({
      name: "",
      email: "",
      phone: "",
      image: "",
    });
    setFile(null);
    setPreview("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
      <TextField
        label="Name"
        name="name"
        value={contact.name}
        onChange={handleChange}
        required
        sx={{
          input: { color: '#fff' },
          label: { color: '#fff' },
          fieldset: { borderColor: '#fff' }
        }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={contact.email}
        onChange={handleChange}
        required
        sx={{
          input: { color: '#fff' },
          label: { color: '#fff' },
          fieldset: { borderColor: '#fff' }
        }}
      />
      <TextField
        label="Phone"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        required
        sx={{
          input: { color: '#fff' },
          label: { color: '#fff' },
          fieldset: { borderColor: '#fff' }
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={preview} sx={{ width: 56, height: 56 }} />
        <Button  variant="outlined" component="label"
          sx={{
            bgcolor: '#ffffff',
            color: '#000000',
            borderColor: '#fff',
            '&:hover': {
              bgcolor: '#dedcdc'
            }
          }}>
            Choose Picture
            <input type="file" hidden accept="image/*" onChange={handleFileChange} />
        </Button>
      </Box>
      <Button type="submit" variant="contained" color="error" sx={{ mt: 1 }}>
        {contactToEdit ? "Update Contact" : "Add Contact"}
      </Button>
    </Box>
  );
};
export default ContactForm;