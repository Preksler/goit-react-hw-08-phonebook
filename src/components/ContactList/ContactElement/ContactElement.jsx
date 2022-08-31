import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { deleteContact } from '../../../redux/Contacts/contact-operations'
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem }) => {
    const { id, name, number } = contactItem;
    const dispatch = useDispatch();
    
    return (
        <li
            key={id}
            className={css.list__item}>
            <div>
                <div className={css.list__name}>{name}</div>
                <div className={css.list__number}>{number}</div>
            </div>
            <button
                className={css.list__btn}
                type="button"
                id={id}
                onClick={(e) => {
                    dispatch(deleteContact(e.target.id))
                    toast.success(`Contact ${name} is delete`);
                }}>
                Delete
            </button>
        </li>
    )
}

ContactElement.propTypes = {
    contactItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactElement;