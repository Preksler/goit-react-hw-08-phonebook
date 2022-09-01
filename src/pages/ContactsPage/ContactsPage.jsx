import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactFilter from "../../components/ContactFilter/ContactFilter";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
    const isContacts = useSelector(state => state.contacts.contacts).length > 0;

    return (
        <>
            <ContactForm />
            {isContacts && (
                <>
                <h2>Contacts</h2>
                <ContactFilter  title="Find contacts by name" />
                </>
            )}
            <ContactList />
        </>
    );
}
export default ContactsPage;