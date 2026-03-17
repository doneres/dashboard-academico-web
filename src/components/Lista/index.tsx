interface ListaProps {
  itemTexto: string;
  ativo?: boolean;
}

export default function Lista({ itemTexto, ativo = false }: ListaProps) {
  const classeAtivo = ativo ? "bg-primary text-light" : "bg-body";

  return <li className={`list-group-item ${classeAtivo}`}>{itemTexto}</li>;
}
