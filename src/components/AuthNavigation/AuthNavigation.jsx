import { NavLink } from 'react-router-dom';

const AuthNavigation = () => {

    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registration</NavLink>
        </div>
    );
}
export default AuthNavigation;