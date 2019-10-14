import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from '../contact/contactContext';
import contactReducer from '../contact/contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                type: "personal",
                _id: "5da3ff3dd41ce21a98e48f01",
                name : "Jenny",
                email: "jenny@gmail.com",
                phone: "555-555-5555",
                user: "5da3fe01d41ce21a98e48eff",
                date: "2019-10-14T04:53:17.345Z",
                __v: 0
            },
            {
                type: "personal",
                _id: "5da3feb6d41ce21a98e48f00",
                name : "James Doe",
                email: "james@gmail.com",
                phone: "444-444-4444",
                user: "5da3fe01d41ce21a98e48eff",
                date: "2019-10-14T04:51:02.374Z",
                __v: 0
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // TODO: Add Contact

    // TODO: Delete Contact

    // TODO: Set Current Contact

    // TODO: Clear Current Contact

    // TODO: Update Contact

    // TODO: Filter Contacts

    // TODO: Clear Filter

    return (
        <ContactContext.Provider values={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;

