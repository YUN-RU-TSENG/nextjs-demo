import axios from 'axios'

export default function Products({ products }) {
    return (
        <div>
            <h2>文章列表</h2>
            {products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts') // 替換為實際的 API 網址
        const products = response.data

        return {
            props: {
                products,
            },
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                products: [],
            },
        }
    }
}
