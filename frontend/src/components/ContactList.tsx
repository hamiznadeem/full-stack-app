import React from "react";
import type { Contact } from "../interfaces/Contact";
import { Card, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    contacts: Contact[];
    onDelete: (id: number) => void;
    onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<Props> = ({ contacts, onDelete, onEdit }) => {
    return (
        <>
            {
                contacts.map((contact) => (
                    <Card key={contact.id}>
                        <Typography variant="h4" color="initial">
                            {contact.name}
                        </Typography>

                        <Typography variant="h4" color="initial">
                            {contact.email}
                        </Typography>

                        <Typography variant="h4" color="initial">
                            {contact.phone}
                        </Typography>

                        <IconButton onClick={() => onDelete(contact.id)} color="error">
                            <DeleteIcon />
                        </IconButton>
                        
                        <IconButton onClick={() => onEdit(contact)} color="warning">
                            <EditIcon />
                        </IconButton>
                    </Card>
                ))
            }
        </>
    )
}

export default ContactList;