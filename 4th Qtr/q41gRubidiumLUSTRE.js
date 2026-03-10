let rating = 0;

const stars = document.querySelectorAll(".star");

stars.forEach(function(star) {

    star.addEventListener("click", function() {

    rating = this.dataset.value;

    stars.forEach(function(s) {
        s.classList.remove("active");
    });

    for (let x = 0; x < rating; x++) {
        stars[x].classList.add("active");
    }

});

});


// this function runs when "Add Movie" is clicked
function addMovie() {

    // get values from the form
    let title = document.getElementById("movieTitle").value;
    let year = document.getElementById("movieYear").value;
    let genre = document.getElementById("movieGenre").value;

    // creates movei object
    let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating.toString()
    };

    // get movies already stored in localStorage
    let movies = JSON.parse(localStorage.getItem("movies"));

    if (movies === null) {
        movies = [];
    }

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();

    document.getElementById("movieForm").reset();

    stars.forEach(function(s) {
        s.classList.remove("active");
    });

    rating = 0;
}


// this function would show all saved movies
function displayMovies() {

    let movieList = document.getElementById("movieList");

    movieList.innerHTML = "<h2>Movie List</h2>";

    // get movies from our storage
    let movies = JSON.parse(localStorage.getItem("movies"));

    if (movies === null) {
        return;
    }

    // shows each movie
    movies.forEach(function(movie) {

        let starDisplay = "★".repeat(movie.rating);

        movieList.innerHTML += `
        <div>
            ${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starDisplay}
        </div>
        `;

    });

}

displayMovies();