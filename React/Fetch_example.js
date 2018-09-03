import React, { Component } from "react";

class App extends Component {
    state = {
        allMovies: []
    };
    componentDidMount() {
        this.fetchAllMovies();
    }
    fetchAllMovies = () => {
        fetch(`https://fed17.herokuapp.com/top-movies?_limit=10`)
            .then(res => res.json())
            .then(json => {
                this.setState({ allMovies: json });
            });
    };
    render() {
        const movieList = this.state.allMovies.map((movie, index) => {
            return (
                <div key={index}>
                    <h1>{movie.title}</h1>
                    <img src={movie.poster} alt={movie.title + " poster image"}></img>
                    <p>{movie.rating}</p>
                </div>
            );
        });
        return (
            <div>
                {movieList}
            </div>
        );
    }
}
export default App;