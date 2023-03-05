import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductInfo() {
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
    }, [id])
    console.log(product);
    return (
        <>
            {product && (
                <>
                    <h1>{product.category}</h1>
                    <img src={product.image} />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                    <p>{product.rating.rate}</p>
                    <p>{product.rating.count}</p>
                </>
            )}
        </>
    )
}