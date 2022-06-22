import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating } = movie;

  // console.log(movie);
  // const display = (m = movie) => {
  //   m.map((results) => {
  //     console.log(results.data.year);
  //   });
  // };

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      {/* h-100 to make the image height same for all the cards */}
      <Card.Img variant="top" src={Poster} className="h-100" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating:{imdbRating}</Card.Title>
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
