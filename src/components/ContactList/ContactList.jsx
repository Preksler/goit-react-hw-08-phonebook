import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/Contacts/contact-operations";
import ContactElement from './ContactElement/ContactElement';
import css from "./ContactList.module.css"

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filterValue = useSelector(state => state.contacts.filter).toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])
    
    return (
        <ul className={css.list}>
            {filterContacts.map(({ id, name, number }) => {
                return (
                    <ContactElement
                        contactItem={{ id, name, number }}
                        key={id}
                    />
                )
            })}
        </ul>
    )
}

export default ContactList;