function CPage(props) {
    return (
        <div>
            <Link href="/a">getStaticProps</Link> ｜
            <Link href="/b">useEffect</Link> ｜
            <h2>CPage</h2>
            <ul>
                {props.products.map((item) => (
                    <li key={item.id}>${item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log('getServerSideProps')
    return {
        props: data,
    }
}

export default CPage
