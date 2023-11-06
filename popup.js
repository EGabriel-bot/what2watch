// al interactuar con el boton de la extension se ejecuta la llamada al API y se muestra el resultado de las peliculas
document.addEventListener('submit', function (e) {
    e.preventDefault();
    const search = document.getElementById('search').value;
    const url = 'http://www.omdbapi.com/?apikey=8b1a2f8e&s=' + search;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (this.status == 200) {
            const moviesResponse = JSON.parse(this.responseText);
            const movies = movies.Search;
            let output = '';
            for (let i in movies) {
                output +=
                    `
                    <div class="movie-card-${i}">
                        <div class="well text-center">' +
                            <img src="${movies[i].Poster}">
                            <h3>${movies[i].Title}</h3>
                        </div>
                    </div>';
                    `;
            }
            document.getElementById('movies').innerHTML = output;
        }
    }
    xhr.send();
});