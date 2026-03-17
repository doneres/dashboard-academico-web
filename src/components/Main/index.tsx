import Aviso from "../Aviso";
import CardPresenca from "../CardPresenca";
import Lista from "../Lista";

export default function Main() {
  const itensLista = [
    { id: "1", itemTexto: "Dashboard", ativo: true },
    { id: "2", itemTexto: "Lista de exercicios", ativo: false },
    { id: "2", itemTexto: "Materiais de aulas", ativo: false },
  ];

  return (
    <div className="container p-3 d-flex flex-row gap-5">
      <ul className="list-group d-flex flex-colum">
        {itensLista.map((item) => (
          <Lista key={item.id} itemTexto={item.itemTexto} ativo={item.ativo} />
        ))}
      </ul>
      <CardPresenca />
      <Aviso
        aula="AULA 05"
        aviso="Lembre-se que a responsabilidade do visual é do CSS, mas a estrutura lógica é do React!"
        turma="ADS1241"
      />
    </div>
  );
}
