import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Da Paolo Ristorante - Services',
  description: 'The best restaurant in Puerto Banus',
}

export default function Services() {
  return (
    <>
 
    <h1 className={styles.titulo}>Services</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </>
  )
}
