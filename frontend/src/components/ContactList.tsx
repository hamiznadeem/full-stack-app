import type React from "react";
import type { Contact } from "../interfaces/Contact";
import { Card, CardContent, IconButton, Typography, Box, Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

interface Props {
    contacts: Contact[];
    onDelete: (id: string) => void;
    onEdit: (contact: Contact) => void;

}

const ContactList: React.FC<Props> = ({ contacts , onDelete , onEdit }) => {
    if (contacts.length === 0) {
        return (
            <>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 3 }}>
                No Contact Found
            </Typography>
            </>
        );
    }
    return(
        <>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3, mb: 3}}>
            {contacts.map((contact) => (
                <Card 
                    key={contact._id} 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                        border: '1px solid #fff',
                        borderRadius: 2,
                        boxShadow: 2,
                        bgcolor: 'black',
                        color: '#fff'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                        <Avatar 
                            src={contact.image ? `http://localhost:5000/uploads/${contact.image}` : undefined}
                            alt={contact.name}
                            sx={{ width: 56, height: 56 }}
                        >
                            {contact.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <CardContent sx={{ p: '0 !important', display: 'flex', alignItems: 'center', gap: 2,  }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                {contact.name}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center'}} variant="body2" color="text.secondary">
                                <MailIcon/>
                                {contact.email}
                            </Typography>
                            <Typography sx={{display: 'flex', alignItems: 'center'}} variant="body2" color="text.secondary">
                                <PhoneIcon/>
                                {contact.phone}
                            </Typography>
                        </CardContent>
                    </Box>
                    {/* Right: Actions */}
                    <Box>
                        <IconButton onClick={() => onEdit(contact)} color="primary">
                            <EditIcon />
                        </IconButton>
                        <IconButton 
                            onClick={() => {
                                if (contact._id) onDelete(contact._id);
                            }} 
                            color="error"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Card>
            ))}
        </Box>
        </>
    )
}

export default ContactList;