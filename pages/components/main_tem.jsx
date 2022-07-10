import styles from '../../styles/Home.module.css'
import Link from 'next/link'  
import Image from 'next/image'

function Main_tem (props) {

    const {mainsets} = props

    const {main_title, description, OldTest, NewTest, Old_description, New_description, powered} = mainsets

    return (
    <div>
    <main className={styles.main}>

        <h1 className={styles.title}>
          {main_title}
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.grid}>
          

          <Link  href={'/'}><a className={styles.card}>
            <h2>{OldTest} &rarr;</h2>
            <p>{Old_description}</p>
          </a></Link>
        
          <Link href={'/gosp'}><a className={styles.card}>
            <h2>{NewTest} &rarr;</h2>
            <p>{New_description}</p>
          </a></Link>
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {powered}{' '}
          <span className={styles.logo}>
            <Image src="/icxc.png" alt="ICXC Logo" width={25} height={25} />
          </span>
        </a>
      </footer>
    </div>
    )
    }

export default Main_tem