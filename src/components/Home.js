import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Home/home.css'


export default function Home() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])

    const filterProducts = products.filter(product => {
        return product.category.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='main-container'>
            <input
                value={search}
                autoFocus
                type="text"
                autoComplete='off'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Поиск товара'
            />
            <button onClick={filterProducts}>click me</button>
            <div className="container">
                {filterProducts && filterProducts.map((datas) => {
                    return (
                        <Link to={`/products/${datas.id}`} key={datas.id} className="internal-container">
                            <h1>{datas.category}</h1>
                            <img className="image" src={datas.image} alt={datas.category} />
                            <p className="title">{datas.title}</p>
                            <p className="price">{datas.price}$</p>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}