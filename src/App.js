import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({}); //state to update the  searched movie through form
  const [showError, setShowError] = useState(""); //state to hold the error message
  const [movieList, setMovieList] = useState([]); //state to update the movie list

  //onSubmit function
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    // console.log(result);

    setMovie(result); //updating the movie
    result.Response === "False" ? setShowError(result.Error) : setShowError(""); //ternary operator
    // if(result.Response === "True"){
    //   setMovie(result);
    //   setShowError("");
    //   )else{
    //     setMovie({});
    //     setShowError(result.Error)
    //   }
    // } //alternate method
  };

  //to update the selected movie to be displayed on the movie list
  //function to pass through the component
  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  // console.log(movieList);

  const handleRemoveItem = (imdbID) => {
    // console.log(imdbID);

    const filteredArg = movieList.filter((item) => item.imdbID !== imdbID);

    setMovieList(filteredArg);
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                func={movieSelect}
                inSearchForm={true}
              />
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>
        <hr />

        <div className="">
          <MovieList
            movieList={movieList}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
        <hr />
      </Container>
    </div>
  );
}

export default App;

// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// function BasicExample() {
//   return (
//     <div className="wrap">
//       <Container className="d-flex " />
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       <Container />

//     </div>
//   );
// }

// export default BasicExample;
