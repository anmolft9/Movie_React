import axios from "axios";
const apiEndPoint =
  process.env.NODE_ENV === "production"
    ? "https://www.omdbapi.com/?i=tt3896198&apikey=91c05eb9&"
    : "http://www.omdbapi.com/?i=tt3896198&apikey=91c05eb9&";

export const fetchMovieInfo = async (title) => {
  const url = apiEndPoint + "t=" + title;
  //   console.log(url);

  const { data } = await axios.get(url);
  return data;
  //   console.log(response);
};
