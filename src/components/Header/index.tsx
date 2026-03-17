interface Titulo {
  titulo: string;
  professor: string;
}

export default function Header({ titulo, professor }: Titulo) {
  return (
    <div className="bg-primary text-light p-3 shadow">
      <div className="container d-flex flex-row  justify-content-between align-items-center">
        <h1>{titulo}</h1>
        <p className="text-center"> Prof. {professor}</p>
      </div>
    </div>
  );
}
