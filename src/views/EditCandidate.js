import React, { useState, useEffect } from "react";
import { Container, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EditCandidate() {
  const [validated, setValidated] = useState(false);
  const [candidate, setCandidate] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCandidate();
  }, []);

  const getCandidate = async () => {
    const url = `http://localhost:3001/candidates/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setCandidate(data);
    console.log("Data", data);
  };

  const editCandidate = async () => {
    const response = await fetch(`http://localhost:3001/candidates/${id}`, {
      headers: {
        "content-type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(candidate)
    });
    setCandidate(response);
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  console.log(candidate);

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={candidate.first_name}
              onChange={e =>
                setCandidate({ ...candidate, first_name: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue={candidate.last_name}
              onChange={e =>
                setCandidate({ ...candidate, last_name: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                defaultValue={candidate.email}
                onChange={e =>
                  setCandidate({ ...candidate, email: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please choose a email address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              defaultValue={candidate.city}
              onChange={e =>
                setCandidate({ ...candidate, city: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job Title"
              required
              defaultValue={candidate.job_title}
              onChange={e =>
                setCandidate({ ...candidate, job_title: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid job title.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company"
              required
              defaultValue={candidate.company}
              onChange={e =>
                setCandidate({ ...candidate, company: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid company.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={() => {editCandidate()}}>Submit form</Button>
      </Form>
    </Container>
  );
}
