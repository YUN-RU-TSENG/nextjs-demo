function APage(props) {
    return (
        <div>
            <Link href="/b">useEffect</Link> ｜
            <Link href="/c">getServerSideProps</Link>｜
            <h2>APage</h2>
            <ul>
                {props.products.map((item) => (
                    <li key={item.id}>${item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log('getStaticProps')
    return {
        props: data,
    }
}

export default APage
