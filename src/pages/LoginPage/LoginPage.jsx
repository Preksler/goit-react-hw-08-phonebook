import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import { logIn } from '../../redux/Auth/auth-operations';
import { Wrapper, Title, Form, Label, Input, Button } from "./LoginPage.styled";

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
        dispatch(logIn({ email, password }));
        setEmail("");
        setPassword("");
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Title>Login page</Title>
                <Label>
                    Email
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleChange}>
                    </Input>
                </Label>
                <Label>
                    Password
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={handleChange}>
                    </Input>
                </Label>
                <Button type="submit">Log in</Button>
            </Form>
        </Wrapper>
    );
}
export default LoginPage;