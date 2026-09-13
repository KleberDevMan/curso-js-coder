import {Layout} from "../components/Layout";
import {useState} from "react";

export default function Estado() {
  const [state, setState] = useState(0)

  function incrementar() {
    setState(state + 1)
  }

  return (
    <Layout>
      <span>Estado: {state}</span>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}