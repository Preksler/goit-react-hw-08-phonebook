import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteContact } from '../../../redux/Contacts/contact-operations';
import EditContact from "../../EditContact/EditContact"
import { ListItem, WrapperContactInfo, Name, Number, ListBTN, WrapperBTN } from "./ContactElement.styled";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Avatar from 'react-avatar';

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
            <WrapperContactInfo>
                <Avatar name={name} size="50" round={true} />
                <div>
                    <Name>Name: {name}</Name>
                    <Number>Number: {number}</Number>
                </div>
            </WrapperContactInfo>
            <WrapperBTN>
                {!isEditContact && 
                <>
                    <ListBTN
                        type="button"
                        id={id}
                        onClick={toggleEditContact}>
                        <AiOutlineEdit size={18} />
                    </ListBTN>
                    <ListBTN
                        type="button"
                        id={id}
                        onClick={(e) => {
                            dispatch(deleteContact(e.target.id))
                            toast.success(`Contact ${name} is delete`);
                        }}>
                        <AiOutlineDelete size={18} />
                    </ListBTN>
                </>
                }
            </WrapperBTN>
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