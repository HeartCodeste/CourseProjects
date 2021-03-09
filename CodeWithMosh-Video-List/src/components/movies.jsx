import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";


class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete(movie) {
        const clonedMovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: clonedMovies});

    };
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].isLiked = !movies[index].isLiked;
        this.setState({movies});
    }

    render() {
        const {length: count} = this.state.movies;
        if (count === 0) { 
            return <p className="mt-4">There are no movies in the database.</p>;
        }
        return (
            <React.Fragment>
                <p className="mt-4">Showing {count} movies in the database.</p>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like onLike={() => {this.handleLike(movie)}} isLiked={movie.isLiked} /></td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>{this.handleDelete(movie)}}>Delete</button></td>
                            </tr>)}
                        </tbody>
                </table>
            </React.Fragment>
            );
    }
}

export default Movies;


function A(x){
    ////
}


function B(){
    A({});
}

B();