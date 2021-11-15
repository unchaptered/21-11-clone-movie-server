import "dotenv/config";

import axios from "axios";

/* YTS 의 API Document 에서 list_movei.json 문서에서 지원하는 parameter 항목 일부
  항목명[디폴트값]
  limit[20] Int
  page[1] Int
  quality[All:720px,1080px,2160px,3D] String
  minimum_rating[0] Int (0~9)
  
  result.json 에서 minimum_rating 의 반환값인 raintg 은 실수값이다.
  하지만 minimum_rating 은 공식 document 기준 0~9 사이의 정수값이다.

  그렇기 때문에 하나의 딜레마가 발생하는데,
  client 가 minimum_rating 기준값을 입력할 때는 정수로 입력하게 해야하지만,
  실제로 GraphQL 에서는 Int 가 아니라 Flaot 으로 받아들여야 하는 것이다.
*/
export const getMovies = async (limit, page, quality, rating) => {
  const {
    data: {
      data: { movies: moviesAPI },
    },
  } = await axios(process.env.API_URL_MOVIES, {
    params: {
      limit,
      page,
      quality,
      minimum_rating: rating,
    },
  });
  const movies = [];
  const extractValue = ({
    id = null,
    title = null,
    rating = null,
    summary = null,
    language: lang = null,
    medium_cover_image: image = null,
    ...others
  }) => ({ id, title, rating, summary, lang, image });
  moviesAPI.forEach((movie) => movies.push(extractValue(movie)));
  return movies;
};
export const getMovie = async (id) => {
  console.log("하이");
  const {
    data: {
      data: { movie: movieAPI },
    },
  } = await axios(process.env.API_URL_MOVIE, {
    params: {
      movie_id: id,
    },
  });
  const extractValue = ({
    id = null,
    title = null,
    rating = null,
    description_intro: summary = null,
    language: lang = null,
    medium_cover_image: image = null,
    ...others
  }) => ({ id, title, rating, summary, lang, image });
  const movie = extractValue(movieAPI);
  return movie;
};
export const getSuggestion = async (id) => {
  const {
    data: {
      data: { movies: moviesAPI },
    },
  } = await axios(process.env.API_URL_SUGGESTION, {
    params: {
      movie_id: id,
    },
  });
  const movies = [];
  const extractValue = ({
    id = null,
    title = null,
    rating = null,
    summary = null,
    language: lang = null,
    medium_cover_image: image = null,
    ...others
  }) => ({ id, title, rating, summary, lang, image });
  moviesAPI.forEach((movie) => movies.push(extractValue(movie)));
  return movies;
};

console.log("realdata.js on");
// 연습용 코드
// const array = [
//   {
//     title: "안녕",
//     password: "비밀번호",
//     modify: "수정하기",
//     ddd: "ddd",
//   },
//   {
//     title: "안녕",
//     password: "감자탕",
//     modify: "육수",
//     ddd: "ddd",
//   },
// ];
// const newArray = [];
// const func001 = ({ password, modify, ...others }) => ({ password, modify });
// array.forEach((element) => newArray.push(func001(element)));
// console.log(array);
// console.log(newArray);
