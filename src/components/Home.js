import React, { useEffect, useState } from 'react';
import '../styles/Home/home.css'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])
    return (
        <div className="container">
            {/* {products.map(el => <p key={el.id}>{el.title}</p>)} */}
            {products && products.map((datas) => {
                return (
                    // <Link href={`/products/${datas.id}`} key={datas.id}>
                    <div key={datas.id}>
                        <h1>{datas.category}</h1>
                        <img className="image" src={datas.image} alt={datas.category} />
                        <p className="title">{datas.title}</p>
                        <p className="price">{datas.price}$</p>
                    </div>

                    // </Link>
                )
            })}
        </div>
    );
}