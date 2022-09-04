import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import { register } from '../../redux/Auth/auth-operations';
import { Wrapper, Title, Form, Label, Input, Button } from "./RegisterPage.styled";

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
        <Wrapper>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Title>Registration page</Title>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        required
                        onChange={handleChange}>
                    </Input>
                </Label>
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
                <Button type="submit">Registration</Button>
            </Form>
        </Wrapper>
    );
}
export default RegisterPage;