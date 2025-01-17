interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface ApiResponse {
  Search: Movie[];
}

interface HomeProps {
  searchParams: {
    titleSearchKey?: string;
    type?: string; 
    year?: string; 
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { titleSearchKey = "bagdad", type, year } = searchParams;

  const query = new URLSearchParams({
    apikey: "f1cbc41e",
    s: titleSearchKey,
    ...(type && { type }),
    ...(year && { y: year }), 
  });

  const res = await fetch(`http://www.omdbapi.com/?${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: ApiResponse = await res.json();

  if (!data.Search) {
    return <div>No results found.</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Resultados da Pesquisa</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.Search.map((m: Movie) => (
          <div
            key={m.imdbID}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={m.Poster !== "N/A" ? m.Poster : "/placeholder.png"}
              alt={`${m.Title} Poster`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{m.Title}</h3>
            <p>{m.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
