import { Toaster } from 'react-hot-toast';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";
import { useGetAllContactsQuery } from "../redux/mokeApi"

export function App() {
  const { data = [] } = useGetAllContactsQuery();
  const isContacts = data.length > 0;

  return (
    <Container>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      {isContacts && (
        <>
          <h2>Contacts</h2>
          <ContactFilter  title="Find contacts by name" />
        </>
      )}
      <ContactList contacts={data} />
    </Container>
  )
}
