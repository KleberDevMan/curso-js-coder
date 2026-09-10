import Link from "next/link";
import styles from "../styles/Layout.module.css";

export function Layout(props) {
  return (
    <div>
      <div className={styles.cabecalho}>
        <Link href="/">voltar</Link>
      </div>
      {props.children}
      <div className={styles.rodape}>
        <p>Feito com amor por
          <Link href="/"> Kleber </Link>
        </p>
      </div>
    </div>
  )
}