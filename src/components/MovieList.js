import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, handleRemoveItem }) => {
  const [displayList, setDisplayList] = useState([]);
  const [view, setView] = useState("grid");
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  // displayList.map(() => {
  //   console.log(displayList);
  // });

  // const handleRemoveItem = (e) => {
  //   console.log(e);
  //   const name = e.target.value;
  //   console.log(name);
  // };

  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }

    const temArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(temArg);
  };
  return (
    <div>
      <Row>
        <span>{displayList.length}</span>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("sad")}>
              Sad
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="text-end">
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => setView("grid")} variant="secondary">
              Grid
            </Button>
            <Button onClick={() => setView("list")} variant="secondary">
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-5  ">
        <Col className="d-flex justify-content-center flex-wrap ">
          {displayList.map((item, index) =>
            view === "grid" ? (
              <CustomCard key={index} movie={item} func={handleRemoveItem} />
            ) : (
              <CustomList key={index} movie={item} func={handleRemoveItem} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
