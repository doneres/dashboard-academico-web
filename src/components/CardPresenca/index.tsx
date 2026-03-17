import { useState } from "react";

export default function CardPresenca() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-body border p-3 d-flex flex-column text-center rounded shadow-sm">
      <h3>Presentes em Aula</h3>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-success"
      >
        Registar Presença
      </button>
    </div>
  );
}
