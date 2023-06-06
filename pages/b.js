import { useState, useEffect } from 'react'

function BPage() {
    const [data, setData] = useState({})

    useEffect(() => {
        setFetchData(setData)
    }, [])

    return (
        <div>
            <Link href="/a">getStaticProps</Link> ｜
            <Link href="/c">getServerSideProps</Link>｜
            <h2>BPage</h2>
            <ul>
                {data.products?.map((item) => (
                    <li key={item.id}>${item?.title}</li>
                ))}
            </ul>
        </div>
    )
}

async function setFetchData(setData) {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setData(data)
}

export default BPage
