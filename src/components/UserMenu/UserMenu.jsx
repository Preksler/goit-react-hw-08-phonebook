import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/auth-operations';
import { Wrapper, LogOutBtn, UserText, UserNameText } from "./UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(authSelectors.getUsername);
    return (
        <Wrapper>
            <UserText>Welcome <UserNameText>{userName}</UserNameText></UserText>
            <LogOutBtn
                type="button"
                onClick={() => dispatch(logOut())}>
                LogOut
            </LogOutBtn>
        </Wrapper>
    );
}
export default UserMenu;