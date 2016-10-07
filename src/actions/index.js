export const selectContact = (contactId) => (
    {
        type: 'select_contact',
        payload: contactId
    }
);
