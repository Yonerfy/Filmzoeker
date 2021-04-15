const createLiAppendToUl = function (movies) {
    const ul = document.getElementById("movies-places");
    const li = document.createElement("li");
    ul.append(li);
    li.append(movies);
}

const filterMovies = function (movieTitle) {
    return movies.filter(movie => movie.Title.includes(movieTitle))
}

const handleOnChangeEvent = function (event) {
    console.log(event.target.value);
    if (event.target.value == "Avenger Films") {
        return filterMovies("Avengers");
        console.log(filterMovies("Avengers"));
    }
    if (event.target.value == "X-Men Films") {
        return filterMovies("X-Men");
        console.log(filterMovies("X-Men"));
    }
    if (event.target.value == "Princess Films") {
        return filterMovies("Princess");
        console.log(filterMovies("Princess"));
    }
    if (event.target.value == "Batman Films") {
        return filterMovies("Batman")
        console.log(filterMovies("Batman"));
    }
}

const addEventListeners = function () {
    const radios = document.getElementsByName("film-filter");
    // console.log(radios);
    radios.forEach(radios => {
        radios.addEventListener("change", function () {
            // console.log(event.target.value);
            const ul = document.getElementById("movies-places");
            const filterMovies = handleOnChangeEvent(event);
            if (ul.hasChildNodes()) {
                ul.innerHTML = "";
            }
            addMoviesToDom(filterMovies);
        });
    });
}

// const addMoviesToDom = function (movies) {

//     for (let i = 0; i < movies.length; i++) {
//         const img = document.createElement("img");
//         img.src = movies[i].Poster;
//         createLiAppendToUl(img);
//     }
// }
const addMoviesToDom = function (movies) {

    const filterMovies = movies.map(movie => {
        const img = document.createElement("img");
        img.src = movie.Poster;
        createLiAppendToUl(img);
    });
    return filterMovies;
}

// addMoviesToDom(movies);

addEventListeners();

console.log(movies);

