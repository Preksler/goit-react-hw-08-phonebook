import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(authSelectors.getUsername);
    return (
        <div>
            <span>Welcome {userName}</span>
            <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
        </div>
    );
}
export default UserMenu;