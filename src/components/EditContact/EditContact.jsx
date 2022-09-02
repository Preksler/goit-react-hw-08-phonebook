import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../../redux/Contacts/contact-operations'
import toast from 'react-hot-toast';
import { Form, Label, Input, BtnWrapper, Button } from "./EditContact.styled";

function EditContact({ id, editName, editNumber, toggleEditContact }) {
    const [name, setName] = useState(editName);
    const [number, setNumber] = useState(editNumber);
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkName) {
            toast.error(`${name} is already in contacts`);
            return contacts;
        }
        dispatch(editContact({ id, name, number }));
        toast.success(`Contact ${name} is edit`);
        toggleEditContact();
        setName("");
        setNumber("");
    }

    const handleSubmitCancel = (e) => {
        e.preventDefault();
        toast.success(`Edit contact ${name} is cancel`);
        toggleEditContact();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    autoFocus
                    onChange={handleChange}
                />
            </Label>
            <Label>Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </Label>
            <BtnWrapper>
                <Button type="submit">
                    Save
                </Button>
                <Button type="button" onClick={handleSubmitCancel}>
                    Cancel
                </Button>
            </BtnWrapper>
        </Form>   
    )
}

export default EditContact;
