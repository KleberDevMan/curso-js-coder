import {Layout} from "../components/Layout";
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <p>Sobre nós</p>
      </div>
    </Layout>
  )
}