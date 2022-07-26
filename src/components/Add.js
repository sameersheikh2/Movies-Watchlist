import React, { useState } from 'react'
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState()
    const [results, setResults] = useState([])
    const key = "01c3da185b5eef24879699f5137b813f";

    const queryHandler = (e) => {
        setQuery(e.target.value)

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=true&query=${e.target.value}`).then((response) => {
                return response.json();
            }).then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" value={query} placeholder='Search for movies' onChange={queryHandler} />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (<li key={movie.id}>
                                <ResultCard movie={movie}/>
                            </li>))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add