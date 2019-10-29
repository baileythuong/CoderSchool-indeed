import React, { useState, useEffect } from "react";
import { Card, CardDeck, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faBriefcase,
  faMapMarkerAlt,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const response = await fetch("http://localhost:3001/candidates");
    const data = await response.json();
    console.log("candidates", data);
    setCandidates(data);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const removeCandidate = async (id) => {
    const response = await fetch(`http://localhost:3001/candidates/${id}`, {
      headers: {
        "content-type": "application/json"
      },
      method: "DELETE"
    });
    console.log("object", response);
    if (response.status === 200) {
      const clone = [...candidates];
      const newState = clone.filter(
        ({ id: candidateId }) => candidateId !== id
      );
      setCandidates(newState);
    }
  };

  const renderCard = () => {
    return candidates.map(
      ({
        first_name,
        last_name,
        photo_url,
        id,
        email,
        company,
        city,
        job_title
      }) => {
        return (
          <Card className="card-style my-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${photo_url}/100px180`} />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                {first_name} {last_name}{" "}
                <small className="text-muted">#{id}</small>
              </Card.Title>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <FontAwesomeIcon icon={faUserTie} /> {job_title}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {city}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FontAwesomeIcon icon={faBriefcase} /> {company}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FontAwesomeIcon icon={faEnvelope} /> {email}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Link to={`/candidate/${id}`} role="button" className="btn btn-outline-primary mx-2">
                Edit
              </Link>
              <Button
                variant="outline-danger"
                onClick={() => removeCandidate(id)}
                className="mx-2"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      }
    );
  };

  return (
    <div>
      <CardDeck className="mx-3">{renderCard()}</CardDeck>
    </div>
  );
}
