import type React from "react";
import type { Contact } from "../interfaces/Contact";
import {Card, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    contacts: Contact[];
    onDelete: (id: string) => void;
    onEdit: (contact: Contact) => void;

}

const ContactList: React.FC<Props> = ({ contacts , onDelete , onEdit }) => {
    return(
        <>
        {
            contacts.map((contact) => (
                <div key={contact._id}>
                    <Card 
                    sx={{display: 'flex',justifyContent: 'space-between',
                    alignItems: 'center', p: 2, mb: 2, borderRadius: 3,
                    boxShadow: 3,bgcolor: '#000000',color: '#fff',
                    '&:hover': {
                        boxShadow: 8,
                        cursor: 'pointer',
                    }
                    }}>
                    <Typography variant="h6">
                        {contact.name}
                        </Typography>

                        <Typography>
                            {contact.email}
                        </Typography>

                        <Typography>
                            {contact.phone}
                        </Typography>

                        <IconButton  onClick={() => {
                            if(contact._id){
                        onDelete(contact._id)}}}
                        color="error">
                        <DeleteIcon />
                        </IconButton>
                    
                        <IconButton  onClick={() => onEdit(contact)} color="primary">
                            <EditIcon />
                        </IconButton>
                </Card>
                </div>
            ))
        }
        
        </>
    )
}

export default ContactList;