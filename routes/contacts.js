const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const { isEmpty } = require('../utils/validator');

const User = require('../model/User');
const Contact = require('../model/Contact');
/**
 * @route       GET api/contacts
 * @desc        Get all users contacts
 * @access      Private
 * */
router.get('/', auth, async (req, res)=> {
    try {
       const contacts = await Contact.find({ user: req.user.id }).sort('-date');
       await res.json(contacts);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});


/**
 * @route       POST api/contacts
 * @desc        Add new contact
 * @access      Private
 * */
router.post('/', [auth, [
    check('name','Name is required').not().isEmpty(),
    check('email','Email is required').isEmail().not().isEmpty()
]] ,async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const newContact = new Contact({
           name, email, phone, type, user: req.user.id
        });

        const contact = await newContact.save();

        await res.json(contact);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route       PUT api/contacts/:id
 * @desc        Update contact
 * @access      Private
 * */
router.put('/:id', [auth], async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const updateContact = await Contact.findOne({ _id: req.params.id });
        if(!isEmpty(name)) updateContact.name = name;
        if(!isEmpty(email)) updateContact.email = email;
        if(!isEmpty(phone)) updateContact.phone = phone;
        if(!isEmpty(type)) updateContact.type = type;

        const contact = await updateContact.save();
        await res.json(contact);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route       DELETE api/contacts/:id
 * @desc        Delete contact
 * @access      Private
 * */
router.delete('/:id', auth ,async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { deletedCount } = await Contact.deleteOne({ _id: req.params.id });
        if(deletedCount === 1) return res.status(200).send('Contact was deleted');
        return res.status(400).json({ msg: 'Operation failed' })
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;