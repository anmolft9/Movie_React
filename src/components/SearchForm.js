import React, { useState } from "react";

import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;

    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    handleOnSubmit(str);
  };
  return (
    <div className="mt-5 text-center">
      <h1>My Movie List</h1>
      <Form className="mt-3" onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Control onChange={handleOnChange} placeholder=" Movie Name" />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
