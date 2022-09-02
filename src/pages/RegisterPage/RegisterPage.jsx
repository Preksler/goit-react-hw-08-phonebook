import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
            <Form onSubmit={handleSubmit}>
                <Title>RegisterPage</Title>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}>
                    </Input>
                </Label>
                <Label>
                    Email
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}>
                    </Input>
                </Label>
                <Label>
                    Password
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}>
                    </Input>
                </Label>
                <Button type="submit">Registration</Button>
            </Form>
        </Wrapper>
    );
}
export default RegisterPage;