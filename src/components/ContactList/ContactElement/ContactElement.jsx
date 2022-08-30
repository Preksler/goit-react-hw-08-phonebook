import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from '../../../redux/mokeApi'
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem }) => {
    const { id, name, phone, avatar } = contactItem;
    const [deleteContact] = useDeleteContactMutation();
    
    return (
        <li
            key={id}
            className={css.list__item}>
            <img className={css.liat__avatar} src={avatar} alt="avatar" />
            <div>
                
                <div className={css.list__name}>{name}</div>
                <div className={css.list__number}>{phone}</div>
            </div>
            <button
                className={css.list__btn}
                type="button"
                id={id}
                onClick={(e) => {
                    deleteContact(e.target.id);
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
        phone: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })
}

export default ContactElement;