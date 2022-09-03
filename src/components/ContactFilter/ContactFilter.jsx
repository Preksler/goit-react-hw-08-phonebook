import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Contacts/contact-slice';
import { Wrapper, Input, Icon } from "./ContactFilter.styled";
import { BsSearch } from "react-icons/bs";

const ContactFilter = ({ title }) => {
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <Input
                type="text"
                name='filter'
                placeholder={title}
                onChange={e => dispatch(filterContacts(e.target.value))}>
            </Input>
            <Icon>
                <BsSearch size={26} />
            </Icon>
        </Wrapper>
    )
}

ContactFilter.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ContactFilter;