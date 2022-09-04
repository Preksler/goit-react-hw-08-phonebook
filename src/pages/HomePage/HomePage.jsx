import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import authSelectors from '../../redux/Auth/auth-selectors'
import { Wrapper, Text } from "./HomePage.styled";

const HomePage = () => {
    const userName = useSelector(authSelectors.getUsername)
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const contacts = useSelector(state => state.contacts.contacts.length);

    return (
        <Wrapper>
            <Helmet>
                <title>PhoneBook</title>
            </Helmet>
            <Text>
                {isLoggedIn ?
                    `Welcome ${userName} you have ${contacts} contacts` : `Please login to your account or register`}
            </Text>
        </Wrapper>
    );
}
export default HomePage;