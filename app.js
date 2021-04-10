const createLiAppendToUl = function (movies) {
    const ul = document.getElementById("movies-places");
    const li = document.createElement("li");
    ul.append(li);
    li.append(movies);
}

const addEventListeners = function () {
    const radios = document.getElementsByName("film-filter");
    console.log(radios);
    radios.forEach(radios => {
        radios.addEventListener("change", function () {
            console.log(event.target.value);
        })
    })
}

const addMoviesToDom = function (movies) {

    for (let i = 0; i < movies.length; i++) {
        const img = document.createElement("img");
        img.src = movies[i].Poster;
        createLiAppendToUl(img);
    }
}
addMoviesToDom(movies);

addEventListeners();
// console.log(addMoviesToDom(movies));
