import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'

const HomePage = () => {
    const userName = useSelector(authSelectors.getUsername)
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const contacts = useSelector(state => state.contacts.contacts.length);

    return (
        <div>
            {isLoggedIn ? `Welcome ${userName} you have ${contacts} contacts` : `Please login to your account or register`}
        </div>
    );
}
export default HomePage;