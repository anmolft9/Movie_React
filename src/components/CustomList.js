import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = movie;

  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <div style={{ width: "300px" }}>
        <Card.Img variant="top" src={Poster} className="h-100" />
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating:{imdbRating}</Card.Title>
        <div>{Plot}</div>
        {inSearchForm ? (
          <div className="d-flex justify-content-between flex-wrap">
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "sad" })}
            >
              Sad
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2">
            <Button
              onClick={() => func(movie.imdbID)}
              variant="danger"
              size="lg"
            >
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
