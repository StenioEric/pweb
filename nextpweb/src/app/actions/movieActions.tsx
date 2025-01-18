"use client";

import searchMovies from "../actions/movieActions";
import { useState, FormEvent } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieResponse {
  Search: Movie[];
  error?: string;
}

export default function Home() {
  const [data, setData] = useState<MovieResponse>({ Search: [] });

  async function handleAction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o recarregamento da página
    const formData = new FormData(event.currentTarget);
    const res = await searchMovies(formData);
    setData(res);
  }

  return (
    <div>
      <MovieForm actionHandler={handleAction} />
      {data.Search && <MovieTable movies={data.Search} />}
    </div>
  );
}

interface MovieFormProps {
  actionHandler: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function MovieForm({ actionHandler }: MovieFormProps) {
  return (
    <form onSubmit={actionHandler}>
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

interface MovieTableProps {
  movies: Movie[];
}

export function MovieTable({ movies }: MovieTableProps) {
  return (
    <div>
      <div>
        {movies.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))}
      </div>
    </div>
  );
}
