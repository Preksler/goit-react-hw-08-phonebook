import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'

const UserMenu = () => {
    const userEmail = useSelector(authSelectors.getUserEmail);
    return (
        <div>
            <span>Welcome {userEmail}</span>
            <button type="button">LogOut</button>
        </div>
    );
}
export default UserMenu;