import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const ResultCard = (props) => {
  const  {
    addMovieToWatchlist
  } = useContext(GlobalContext)


  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {props.movie.poster_path ?

          <img src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} alt="" /> :
          <div className='filler-poster'></div>
        }
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">
            {props.movie.title}
          </h3>
          <h4 className="release-date">{props.movie.release_date}</h4>
        </div>
        <div className="controls">
          <button className="btn"  onClick={() => addMovieToWatchlist(props.movie)}>Add to watchlist</button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard