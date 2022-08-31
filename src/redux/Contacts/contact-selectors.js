const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = state => {
    const filterValue = getFilter(state).toLowerCase();
    const allContacts = getContacts(state);
    return (
        allContacts.filter(contact => {
            return contact.name.toLowerCase().includes(filterValue);
        })
    )
}

const contactsSelector = {
    getContacts,
    getFilter,
    getFilteredContacts,
};

export default contactsSelector;