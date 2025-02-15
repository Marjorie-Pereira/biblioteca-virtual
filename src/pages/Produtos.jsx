import { useEffect, useState } from "react";

import Product from "../components/Product";
import Button from "../components/Button";
import { useNavigate } from "react-router";

export default function Produtos() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    async function getProducts() {
        const response = await fetch('http://localhost:3000/products');
        const produtos = await response.json();
        setProducts(produtos);
    }

    

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="mx-auto">
            <div className="mx-auto w-80">
                <Button text="Novo produto" onClick={() => navigate("/novo-produto")} />
            </div>
            <div className="mt-4 mx-8 flex flex-wrap gap-4 justify-center">
            
                {products.map((product) => (
                    <Product key={product.id} id={product.id} title={product.name} author={product.author} price={product.price} photo_url={product.photo_url} />
                ))}
            </div>
        </div>
        
    )
}