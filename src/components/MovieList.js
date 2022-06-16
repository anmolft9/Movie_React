import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import { CustomCard } from "./CustomCard";

export const MovieList = () => {
  return (
    <div>
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">All</Button>
            <Button variant="secondary">Happy</Button>
            <Button variant="secondary">Sad</Button>
          </ButtonGroup>
        </Col>
        <Col className="text-end">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-5  ">
        <Col className="d-flex justify-content-center flex-wrap "></Col>
      </Row>
    </div>
  );
};
