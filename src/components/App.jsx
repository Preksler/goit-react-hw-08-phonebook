import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from 'react-hot-toast';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";
import AppBar from "./AppBar/AppBar";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { fetchCurrentUser } from '../redux/Auth/auth-operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    <Container>
      <Toaster />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={
          <>
            <ContactForm />
            <ContactList />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
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
