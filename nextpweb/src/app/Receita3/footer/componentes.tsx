export function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "10px 0",
          textAlign: "center",
          marginTop: "20px",
          marginBottom:"0px"
        }}>

        <p>
          &copy; {new Date().getFullYear()} Carros Incríveis. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
