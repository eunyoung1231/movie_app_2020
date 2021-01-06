import React from 'react'
import axios from 'axios'
import Movie from '../component/Movie'
import './Home.css'

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }

    // axios 어쩌고가 끝날때까지 기다리지만 그 사이에 다른 일을 해도 된다
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
        )
        console.log(movies)
        // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
        // console.log(movies.data.data.movies)
        this.setState({ movies, isLoading: false })
    }

    componentDidMount() {
        // // 6000msec 뒤에 {}안에 함수를 실행해줘라
        // setTimeout(() => {
        //   this.setState({ isLoading: false })
        // }, 6000)
        this.getMovies()
    }

    render() {
        const { isLoading, movies } = this.state

        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        )
    }
}

export default Home
