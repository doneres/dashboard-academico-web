interface informacoes {
  turma: string;
  aula: string;
  aviso: string;
}

export default function Aviso({ turma, aula, aviso }: informacoes) {
  return (
    <div className="bg-body border p-4 rounded shadow-sm">
      <h1>Aviso da disciplina!</h1>
      <p>{aviso}</p>
      <hr />
      <p className="text-secondary">
        Referência: {turma} - {aula}
      </p>
    </div>
  );
}
