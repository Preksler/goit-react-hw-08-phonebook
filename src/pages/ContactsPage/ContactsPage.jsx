import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
    
    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <ContactForm />
            <ContactList />
        </>
    );
}
export default ContactsPage;