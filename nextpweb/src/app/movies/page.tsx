import { GetServerSideProps } from 'next';

// Tipagem para os parâmetros recebidos
interface HomeProps {
  searchParams: {
    titleSearchKey?: string;
  };
}

// Componente Home com tipagem
export default async function Home({ searchParams }: HomeProps) {
  const { titleSearchKey = 'bagdad' } = searchParams;

  const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`);
  const data = await res.json();

  return (
    <div>
      <div>
        {data.Search.map((m: { imdbID: string; Title: string; Year: string; Type: string; Poster:string}) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year} --- {m.Type}

            <img src={m.Poster} alt="" /> 
          </div>
        ))}
      </div>
    </div>
  );
}
