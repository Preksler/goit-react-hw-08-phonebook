import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Contacts/contact-slice';
import { Wrapper, Input } from "./ContactFilter.styled";

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
        </Wrapper>
    )
}

ContactFilter.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ContactFilter;