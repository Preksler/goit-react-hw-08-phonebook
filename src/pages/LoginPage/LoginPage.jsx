import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth'

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
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
        dispatch(authOperations.logIn({ email, password }));
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>LoginPage</h2>
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
            <button type="submit">Log in</button>
        </form>
    );
}
export default LoginPage;