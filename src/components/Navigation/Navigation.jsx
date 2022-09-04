import { NavigationLink, Icon } from "./Navigation.styled";
import { RiContactsBook2Line } from "react-icons/ri";

const Navigation = () => {

    return (
        <nav>
            <NavigationLink to="/contacts">
                <Icon><RiContactsBook2Line size={24} /></Icon>
                Contacts
            </NavigationLink>
        </nav>
    );
}
export default Navigation;