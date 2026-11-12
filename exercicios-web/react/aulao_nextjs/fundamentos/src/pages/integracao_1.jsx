import {useState} from "react";

export default function Integracao_1() {

  const [codigo, setCodigo] = useState(1)
  const [client, setClient] = useState({})

  function obterCliente() {
    fetch(`/api/clients/${codigo}`).then(response => response.json()).then(json => setClient(json))
  }

  return (
    <div>
      <h1>Integracao</h1>

      <div>
        <input type='number' value={codigo} onChange={e => setCodigo(parseInt(e.target.value) || 1)} />
        <button onClick={obterCliente}>Obter Cliente</button>
        <ul>
          <li>{client?.id}</li>
          <li>{client?.nome}</li>
          <li>{client?.email}</li>
        </ul>
      </div>

    </div>
  )
}