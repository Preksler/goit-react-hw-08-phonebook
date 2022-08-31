import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(authSelectors.getUserEmail);
    return (
        <div>
            <span>Welcome {userEmail}</span>
            <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
        </div>
    );
}
export default UserMenu;