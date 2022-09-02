import { AuthNav } from "./AuthNavigation.styled"

const AuthNavigation = () => {

    return (
        <div>
            <AuthNav to="/login">Login</AuthNav>
            <AuthNav to="/register">Registration</AuthNav>
        </div>
    );
}
export default AuthNavigation;