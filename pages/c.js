function CPage(props) {
    return (
        <div>
            <h2>APage</h2>
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
