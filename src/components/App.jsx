import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import Container from "./Container/Container";
import AppBar from "./AppBar/AppBar";
import HomePage from "pages/HomePage/HomePage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
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
              <ContactsPage />
            </PrivateRoute>
          } />
        </Routes>
      </Container>
    )
  )
}
