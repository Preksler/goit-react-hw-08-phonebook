import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteContact } from '../../../redux/Contacts/contact-operations';
import EditContact from "../../EditContact/EditContact"
import { ListItem, Name, Number, ListBTN } from "./ContactElement.styled";

const ContactElement = ({ contactItem }) => {
    const [isEditContact, setIsEditContact] = useState(false);
    const { id, name, number } = contactItem;
    const dispatch = useDispatch();

    const toggleEditContact = () => {
        setIsEditContact(!isEditContact);
    }
    
    return (
        <ListItem
            key={id}>
            <div>
                <Name>Name: {name}</Name>
                <Number>Number: {number}</Number>
            </div>
            <div>
                {!isEditContact && 
                <>
                    <ListBTN
                        type="button"
                        id={id}
                        onClick={toggleEditContact}>
                        Edit
                    </ListBTN>
                    <ListBTN
                        type="button"
                        id={id}
                        onClick={(e) => {
                            dispatch(deleteContact(e.target.id))
                            toast.success(`Contact ${name} is delete`);
                        }}>
                        Delete
                    </ListBTN>
                </>
                }
            </div>
            {isEditContact &&
                <EditContact
                    id={id}
                    editName={name}
                    editNumber={number}
                    toggleEditContact={toggleEditContact}
                />
            }
        </ListItem>
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