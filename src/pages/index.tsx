import { useEffect, useState } from 'react';
import HeadTitle from '../components/HeadTitle';
import axios from 'axios';

type Movies = {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home() {
  const [movies, setMoves] = useState<[]>();
  
  useEffect(() => {
    axios.get(`/api/movies`).then((res) => {
      setMoves(res.data.results);
      console.log(res.data.results);
    });
  },[])

  return (
    <div className='container'>
      <HeadTitle title="index"/>
      {!movies && <h4>Loading..</h4>}
      {movies?.map((movie: Movies) => 
        <div key={movie.id}>
          <div className='movie' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}></img>
            <h4>{movie.original_title}</h4>
          </div>
        </div>)}
        <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
