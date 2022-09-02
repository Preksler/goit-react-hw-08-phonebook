import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AuthNavigation from "components/AuthNavigation/AuthNavigation";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { Header, Wrapper } from "./AppBar.styled";
import authSelectors from '../../redux/Auth/auth-selectors'
import ContactFilter from "../ContactFilter/ContactFilter";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isContacts = useSelector(state => state.contacts.contacts).length > 1;
    const { pathname } = useLocation();
    return (
        <Header>
            <Wrapper>
                <Logo />
                {isLoggedIn && <Navigation />}
                {isContacts && pathname === "/contacts" && <ContactFilter title="Find contacts by name" />}
            </Wrapper>
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Header>
    );
}
export default AppBar;