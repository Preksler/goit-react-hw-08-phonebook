import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/auth-operations';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>RegisterPage</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}>
                </input>
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}>
                </input>
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>
                </input>
            </label>
            <button type="submit">Registration</button>
        </form>
    );
}
export default RegisterPage;