export const selectContact = (contactId) => (
    {
        type: 'select_contact',
        payload: contactId
    }
);

export const searchContacts = (searchText) => (
    {
        type: 'search_contacts',
        payload: searchText
    }
);
