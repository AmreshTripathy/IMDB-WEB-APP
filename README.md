# IMDB-WEB-APP

## Project Overview- OMDB Movie Search Dashboard With Error Handling
## UI Reference
Figma Link- https://www.figma.com/file/K8tGKTL6tSFENvCBtBjyTy/F3---OMDB?type=design&node-id=0%3A1&mode=design&t=Ac2Rw9D1xECoHnGe-1

## Task Description
Design an interactive movie search dashboard using the OMDB API. The dashboard should include two distinct input fields: one for the API key and another for the movie's title. Users should be able to retrieve a list of movies that matches their search query by clicking on a singular "Search" button. Additionally, during the data fetching process, showcase a custom spinning loader to enhance user experience. Ensure the application is user-friendly and responsive.
To interface with the OMDB API, use the endpoint: https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={API_KEY}. To secure an API key, sign up at OMDB API.
From the returned data, focus on the following:

Search: Array encapsulating movie details: - Title: Movie title. - Year: Release year. - imdbID: Unique movie identifier. - Type: Specifies if it's a movie or series. - Poster: URL to the movie poster.

## Features
1. Inputs & Search: Integrate two input fields:
API Key input
Movie title input
Ensure both fields aren't empty before proceeding. Use a single "Search" button to initiate the search.

2. Custom Spinning Loader: During the data fetching phase, exhibit a CSS-based spinning loader. This loader should be hidden once data is successfully fetched or if an error occurs.

3. Movie Results: For each located movie, dynamically display a card illustrating:
The movie's poster
The title and its release year
A "More Details" option linking to IMDB using `imdbID`

4. Error Management: In situations where errors arise (like "Invalid API Key!"), relay meaningful feedback to users.

5. Adaptive Design: Ensure the dashboard's optimal performance across mobile and desktop.

### Api-Key: e793ece3
