const Contact = require('../models/Contact');

// GET / READ
exports.getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST / CREATE
exports.postContact = async (req, res) => {
    try {
        const contactData = {
            ...req.body,
            ...(req.file && { image: req.file.filename })
        };

        const contact = new Contact(contactData);
        await contact.save();
        res.status(201).json(contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT / UPDATE
exports.putContact = async (req, res) => {
    try {
        const updateData = { ...req.body };
    
        if (req.file) {
            updateData.image = req.file.filename;
        }

        const updated = await Contact.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: "Contact Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};