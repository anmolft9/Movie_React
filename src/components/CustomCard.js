import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ movie = {} }) => {
  const { Title, Poster, imdbRating } = movie;
  // console.log(movie);
  // const display = (m = movie) => {
  //   m.map((results) => {
  //     console.log(results.data.year);
  //   });
  // };

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating:{imdbRating}</Card.Title>
        <div className="d-flex justify-content-between flex-wrap">
          <Button variant="primary">Happy</Button>
          <Button variant="primary">Sad</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
