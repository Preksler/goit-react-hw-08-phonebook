import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/Contacts/contact-operations";
import ContactElement from './ContactElement/ContactElement';
import { List } from "./ContactList.styled";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filterValue = useSelector(state => state.contacts.filter).toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])
    
    return (
        <List>
            {filterContacts.map(({ id, name, number }) => {
                return (
                    <ContactElement
                        contactItem={{ id, name, number }}
                        key={id}
                    />
                )
            })}
        </List>
    )
}

export default ContactList;