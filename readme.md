# project-2021-11-clone-movie-server

YTS Movie API 에서 영화 관련 정보를 **Axios** 로 받아옴

1. schema.graphql
   1-1. movies(limit:Int!, page:Int!, quality:String, rating:Float):[Movie]!
   1-2. movie(id:Int!): Movie
   1-3. suggest(id:Int!):[Movie]!

2. resolvers.js
   2-1. movies:(_,{args})=>getMovies(args)
   2-2. movie:(_,{args})=>getMovie(args)
   2-3. suggest:(\_,{args})=>getSuggestion(id)

3. data.js
   3-1. getMovies
   3-2. getMovie
   3-3. getSuggestions

```javascript
export const getMovies = async (args) => {
  // api 호출로 얻은 movies 객체 배열에서 특정 키-값만 추출하여 새로운 객체배열 movies 로 정제하여 반환
  return movies;
};
```

```javascript
export const getMovie = async (args) => {
  // api 호출로 얻은 movie 객체를 특정 키-값만 추출하여 새로운 객체 movie 로 정제하여 반환
  return movie;
};
```

```javascript
export const getSuggestion = async (args) => {
  // api 호출로 얻은 movie 객체 배열에서 특정 키-값만 추출하여 새로운 객체배열 moies 로 정제하여 반환
  return movies;
};
```
