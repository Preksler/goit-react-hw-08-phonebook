import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteContact } from '../../../redux/Contacts/contact-operations';
import EditContact from "../../EditContact/EditContact"
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem }) => {
    const [isEditContact, setisEditContact] = useState(false);
    const { id, name, number } = contactItem;
    const dispatch = useDispatch();

    const toggleEditContact = () => {
        setisEditContact(!isEditContact);
    }
    
    return (
        <li
            key={id}
            className={css.list__item}>
            <div>
                <div className={css.list__name}>{name}</div>
                <div className={css.list__number}>{number}</div>
            </div>
            <div>
                <button
                    className={css.list__btn}
                    type="button"
                    id={id}
                    onClick={toggleEditContact}>
                    Edit
                </button>
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
            </div>
            {isEditContact &&
                <EditContact
                    id={id}
                    editName={name}
                    editNumber={number}
                />
            }
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