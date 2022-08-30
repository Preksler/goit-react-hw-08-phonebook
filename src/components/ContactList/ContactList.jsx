import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import ContactElement from './ContactElement/ContactElement';
import css from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    const filter = useSelector(state => state.filter.filter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
    
    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, phone, avatar }) => {
                return (
                    <ContactElement
                        contactItem={{ id, name, phone, avatar }}
                        key={id}
                    />
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactList;