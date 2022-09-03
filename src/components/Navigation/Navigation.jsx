import { NavigationLink } from "./Navigation.styled";
import { FcContacts } from "react-icons/fc";

const Navigation = () => {

    return (
        <nav>
            <NavigationLink to="/contacts">
                <FcContacts size={24} />
                Contacts
            </NavigationLink>
        </nav>
    );
}
export default Navigation;