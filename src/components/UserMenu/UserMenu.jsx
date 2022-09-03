import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/auth-operations';
import { Wrapper, LogOutBtn, Icon, UserWrapper, UserText, UserNameText } from "./UserMenu.styled";
import { FiLogOut } from "react-icons/fi";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(authSelectors.getUsername);
    return (
        <Wrapper>
            <UserWrapper>
                <UserText>Welcome <UserNameText>{userName}</UserNameText></UserText>
            </UserWrapper>
            <LogOutBtn
                type="button"
                onClick={() => dispatch(logOut())}>
                LogOut
                <Icon><FiLogOut size={20} /></Icon>
            </LogOutBtn>
        </Wrapper>
    );
}
export default UserMenu;