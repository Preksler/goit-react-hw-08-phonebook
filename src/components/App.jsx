import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import authSelectors from "../redux/Auth/auth-selectors";

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
    <Container>
      <Toaster />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />
        <Route path="/contacts" element={
          <PrivateRoute>
            <ContactForm />
            <ContactList />
          </PrivateRoute>
        } />
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
  )
}
