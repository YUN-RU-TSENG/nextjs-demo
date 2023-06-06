function APage(props) {
    return (
        <div>
            <h2>APage</h2>
            <ul>
                {props.products.map((item) => (
                    <li>${item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    return {
        props: data,
    }
}

export default APage
