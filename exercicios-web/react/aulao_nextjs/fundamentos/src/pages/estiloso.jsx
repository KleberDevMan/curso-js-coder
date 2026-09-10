import styles from '../styles/Estiloso.module.css'
import Cabecalho from "../components/Cabecalho";
import {Layout} from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout>
      <div className={styles.countainer}>
        <Cabecalho titulo="Teste Estiloso" subtitulo="Subtítulo do teste estiloso"/>
      </div>
    </Layout>
  )
}