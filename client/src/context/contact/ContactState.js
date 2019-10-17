import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

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
                "type": "professional",
                "id": "5da429686f13c72888563688",
                "name": "Benjamin Franklin",
                "email": "benjamin@gmail.com",
                "phone": "666-666-6666",
                "user": "5da3fe01d41ce21a98e48eff",
                "date": "2019-10-14T07:53:12.713Z",
            },
            {
                "type": "personal",
                "id": "5da3ff3dd41ce21a98e48f01",
                "name": "Jenny",
                "email": "jenny@gmail.com",
                "phone": "555-555-5555",
                "user": "5da3fe01d41ce21a98e48eff",
                "date": "2019-10-14T04:53:17.345Z",
            },
            {
                "type": "personal",
                "id": "5da3feb6d41ce21a98e48f00",
                "name": "James Doe",
                "email": "james@gmail.com",
                "phone": "444-444-4444",
                "user": "5da3fe01d41ce21a98e48eff",
                "date": "2019-10-14T04:51:02.374Z",
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };
    // Filter Contacts
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;