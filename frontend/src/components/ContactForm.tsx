import React, { useEffect, useState } from "react";
import type { Contact } from "../interfaces/Contact";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
    // onAdd: (contact: Contact) => void;
    onAddOrUpdate: (contact: Contact) => void;
    contactToEdit?: Contact | null;
    
}

const ContactForm: React.FC<Props> = ({ onAddOrUpdate, contactToEdit }) => {
    const [contact, setContact] = useState<Contact>(() => ({
        id: Date.now(),
        name: "",
        email: "",
        phone: ""
    }));


    useEffect(() => {
        if(contactToEdit){
            setContact(contactToEdit)
        }
    }, [contactToEdit]
)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (contact.name && contact.email && contact.phone) {
            onAddOrUpdate(contact);

            setContact({
                id: Date.now(),
                name: "",
                email: "",
                phone: ""
            });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <div>
                <TextField
                    label="Name"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <TextField
                    label="Email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <TextField
                    label="Phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                />
            </div>

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Add Contact
            </Button>
        </Box>
    );
};

export default ContactForm;