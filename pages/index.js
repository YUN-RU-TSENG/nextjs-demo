import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Link href="/a">getStaticProps</Link>
            <Link href="/b">useEffect</Link>
            <Link href="/c">getServerSideProps</Link>
        </div>
    )
}
