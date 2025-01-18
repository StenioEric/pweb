"use client";

import { useState, useRef } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function Home() {
  const [resultMovies, setResultMovies] = useState<Movie[]>([]); // Armazena resultados
  const [searchKey, setSearchKey] = useState(""); // Armazena chave de pesquisa
  const [isLoading, setIsLoading] = useState(false); // Controla estado do botão

  async function handleAction(titleSearchKey: string) {
    setIsLoading(true);
    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
    );
    const jsonRes = await httpRes.json();
    setResultMovies(jsonRes.Search || []);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Pesquisar Filmes</h1>
      <div className="max-w-xl w-full bg-white p-6 shadow-lg rounded">
        <MovieForm
          handleAction={handleAction}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          isLoading={isLoading}
        />
      </div>
      <div className="mt-8 w-full max-w-4xl">
        <MovieTable movies={resultMovies} />
      </div>
    </div>
  );
}

const MovieForm = ({
  handleAction,
  searchKey,
  setSearchKey,
  isLoading,
}: {
  handleAction: (titleSearchKey: string) => void;
  searchKey: string;
  setSearchKey: (value: string) => void;
  isLoading: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAction(searchKey); // Passa a chave de busca para o handler
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <label htmlFor="idTitleSearchKey" className="text-lg">
        Título
      </label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={searchKey}
        ref={inputRef}
        onChange={(e) => setSearchKey(e.target.value)} // Atualiza estado da busca
        className="p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`py-2 px-4 font-bold text-white rounded ${
          isLoading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
};

const MovieTable = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white shadow-md rounded overflow-hidden text-center p-4"
          >
            <img
              alt={movie.Title}
              src={movie.Poster}
              className="w-full h-60 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Nenhum resultado encontrado.
        </p>
      )}
    </div>
  );
};
