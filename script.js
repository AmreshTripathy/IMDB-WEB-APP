var api_key = document.getElementById("api_key");
var api_button = document.getElementById("api_button");
var search_text = document.getElementById("serch_text");
var search_button = document.getElementById("search");
var error = document.getElementById("error");
var loader = document.getElementById("loader");
var container = document.getElementById("movie-container");
// e793ece3
search_text.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchResult();
    }
});

search_button.addEventListener("click", searchResult);

api_key.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchResult();
    }
});

api_button.addEventListener("click", searchResult);

function searchResult() {
    container.innerHTML = ``;
    if (api_key.value === "" || search_text.value === "") {
        displayError("Please provide both the fields!");
        loader.style.display = "none";
    } else {
        error.style.display = "none";

        loader.style.display = "flex";
        setTimeout(() => {
            fetchResults();
            loader.style.display = "none";
        }, 2000);

    }
}

function fetchResults() {
    var url = `https://www.omdbapi.com/?s=${search_text.value}&apikey=${api_key.value}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.Error) {
                displayError(data.Error);
            } else {
                displayResults(data.Search);
            }
        })
        .catch(error => {
            displayError(error);
        });
}

function displayResults(movieList) {
    var index = 1;
    movieList.forEach((movie) => {
        const card = document.createElement("a");
        card.href = `https://www.imdb.com/title/${movie.imdbID}`;
        card.target = "_blank";
        card.innerHTML = `
            <div class="card">
                <div class="movie-banner">
                    <img src="${movie.Poster}" alt="">
                </div>
                <div class="details">
                    <p class="number">${index}</p>
                    <p class="movie-name">${movie.Title}, ${movie.Year}</p>
                </div>
            </div>
        `;
        if (movie.Poster !== "N/A") {
            container.appendChild(card);
            index += 1;
        }
    });
}

function displayError(message) {
    error.style.display = "flex";
    error.innerHTML = message;
}