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
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    // console.log(result);

    setMovie(result); //updating the movie
    // if(result.Response === "True"){
    //   setMovie(result);
    //   setShowError("");
    //   )else{
    //     setMovie({});
    //     setShowError(result.Error)
    //   }
    // } //alternate method
    result.Response === "False" ? setShowError(result.Error) : setShowError(""); //ternary operator
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && <CustomCard movie={movie} />}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>
        <hr />
        <MovieList />

        <div className="">form goes here</div>
        <div className="">card view goes here</div>
        <hr />
        <div className="">movie listing area</div>
      </Container>
    </div>
  );
}

export default App;
