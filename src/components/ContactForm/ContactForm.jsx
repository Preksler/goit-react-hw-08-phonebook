import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/contact-operations'
import toast from 'react-hot-toast';
import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";

function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
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
        dispatch(addContact({ name, number }));
        toast.success(`Contact ${name} is add`);
        setName("");
        setNumber("");
    }


    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Label>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
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
                <Button type="submit">
                    Add contact
                </Button>
            </Form>   
        </Wrapper>
    )
}

export default ContactForm;
