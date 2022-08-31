import { useSelector } from "react-redux";
import AuthNavigation from "components/AuthNavigation/AuthNavigation";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import authSelectors from '../../redux/Auth/auth-selectors'

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Header>
            <Logo />
            {isLoggedIn ? (<><Navigation /><UserMenu /></>) : <AuthNavigation />}
        </Header>
    );
}
export default AppBar;