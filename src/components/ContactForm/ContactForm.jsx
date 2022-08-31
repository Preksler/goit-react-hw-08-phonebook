import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/contact-operations'
import toast from 'react-hot-toast';
import css from "./ContactForm.module.css"

function ContactForm({ contacts }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
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
        // const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        // if (checkName) {
        //     alert(`${name} is already in contacts`);
        //     return contacts;
        // }
        dispatch(addContact({ name, number }));
        toast.success(`Contact ${name} is add`);
        setName("");
        setNumber("");
    }


    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.form__lable}>Name
                <input
                    className={css.form__input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label className={css.form__lable}>Number
                <input
                    className={css.form__input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className={css.form__btn}>
                Add contact
            </button>
        </form>   
    )
}

export default ContactForm;
