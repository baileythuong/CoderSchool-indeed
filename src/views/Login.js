import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Login() {
    const [currentUser, setCurrentUser] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: "SIGN_IN",
            data: {
                username: currentUser.username,
                password: currentUser.password,
                name: currentUser.username
            }
        })
        history.push("/login/welcome")
    }
    

  return (
      <Container>
    <Form onSubmit={submit}>
      <Form.Group controlId="formBasicEmail" onChange={(e) => setCurrentUser({...currentUser, username: e.target.value})}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword" onChange={(e) => setCurrentUser({...currentUser, password: e.target.value})}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}
