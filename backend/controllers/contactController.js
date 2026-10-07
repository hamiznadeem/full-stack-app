const Contact = require('../models/Contact');

// GET / READ

exports.getContact = async (req, res)=>{
    const Contacts =  await Contact.find();
    res.json(Contacts);
}

// POST / CREATE

exports.postContact = async (req, res)=>{
    const contact = new Contact(req.body);
    await contact.save();
    res.json(Contacts);
}


// PUT / UPDATE

exports.putContact = async (req, res)=>{
    const updated = Contact.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(updated);
}


// DELETE

exports.deleteContact = async (req, res)=>{
    await Contact.findByIdAndDelete(req.params.id)
    res.json({Message : "Contact Deleted Successfully"});
}
