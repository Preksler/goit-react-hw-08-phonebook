import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/Auth/auth-selectors"

export const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}