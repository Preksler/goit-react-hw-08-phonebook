import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
// import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";
// import { useGetAllContactsQuery } from "../redux/mokeApi"
import AppBar from "./AppBar/AppBar";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";

export function App() {
  // const { data = [] } = useGetAllContactsQuery();
  // const isContacts = data.length > 0;

  return (
    <Container>
      <Toaster />
      <AppBar />
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* <h1>Phonebook</h1> */}
      {/* <ContactForm contacts={data} /> */}
      {/* {isContacts && (
        <>
          <h2>Contacts</h2>
          <ContactFilter  title="Find contacts by name" />
        </>
      )} */}
      {/* <ContactList contacts={data} /> */}
    </Container>
  )
}
