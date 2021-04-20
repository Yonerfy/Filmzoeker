const createLiAndAppendToUl = function (movies) {
    const ul = document.getElementById("movies-places");
    const li = document.createElement("li");

    ul.append(li);
    li.append(movies);

}

const linkToMovie = function (linkID) {
    return `https://www.imdb.com/title/${linkID}`;
}

const filterMovies = function (movieTitle) {
    return movies.filter(movie => movie.Title.includes(movieTitle))
}

const filterLatestMovies = function () {
    return movies.filter(movie => movie.Year >= 2014);
}

const handleOnChangeEvent = function (event) {
    if (event.target.value == "Avenger Films") {
        return filterMovies("Avengers");
    }
    if (event.target.value == "X-Men Films") {
        return filterMovies("X-Men");
    }
    if (event.target.value == "Princess Films") {
        return filterMovies("Princess");
    }
    if (event.target.value == "Batman Films") {
        return filterMovies("Batman");
    }
    if (event.target.value == "Laatste Films") {
        return filterLatestMovies();
    }
}

const addMoviesToDom = function (movies) {

    const filterMovies = movies.map(movie => {
        const img = document.createElement("img");
        const a = document.createElement("a");
        a.append(img);
        a.href = linkToMovie(movie.imdbID);
        img.src = movie.Poster;
        createLiAndAppendToUl(a);
    });
    return filterMovies;
}

const addEventListeners = function () {
    const radios = document.getElementsByName("film-filter");
    radios.forEach(radios => {
        radios.addEventListener("change", function () {
            const ul = document.getElementById("movies-places");
            const filterMovies = handleOnChangeEvent(event);
            if (ul.hasChildNodes()) {
                ul.innerHTML = "";
            }
            addMoviesToDom(filterMovies);
        });
    });
}

const filterMovieWithText = function () {
    const textBox = document.getElementById("filter-movies");
    textBox.addEventListener("keyup", function (event) {
        const ul = document.getElementById("movies-places");
        if (event.keyCode === 13) {
            if (ul.hasChildNodes()) {
                ul.innerHTML = "";
            }
            if (textBox.value == "Avengers") {
                ul.innerHTML = "";
                addMoviesToDom(filterMovies("Avengers"));
            }
            if (textBox.value == "X-Men") {
                ul.innerHTML = "";
                addMoviesToDom(filterMovies("X-Men"));
            }
            if (textBox.value == "Princess") {
                ul.innerHTML = "";
                addMoviesToDom(filterMovies("Princess"));
            }
            if (textBox.value == "Batman") {
                ul.innerHTML = "";
                addMoviesToDom(filterMovies("Batman"));
            }
        }
    })

}
filterMovieWithText(event);
addEventListeners();
addMoviesToDom(movies);


