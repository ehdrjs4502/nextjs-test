import { useEffect, useState } from 'react';
import HeadTitle from '../components/HeadTitle';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MovieProps {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home( {results}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  const onClick = (id: number, title: string) => {
    router.push({
      pathname: `/movies/${title}/${id}`, // url 경로
  });
  }

  return (
    <div className='container'>
      <HeadTitle title="index"/>
      {results?.map((movie: MovieProps) => 
        <div key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
          <div className='movie' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}></img>
            <h4>{movie.original_title}</h4>
          </div>
        </div>
      )}
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
          cursor: pointer;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}