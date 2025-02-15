import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../components/Button";
import useFormApi from "../hooks/useFormApi";


export default function ProdutoPage() {

    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const { deleteProduct } = useFormApi("DELETE");
 

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`http://localhost:3000/products/${params.id}`);
            const data = await response.json();
            setProduct(data)
        }
        getProduct();
 
    }, []);
    

    return (
        <>
            {product && 
                <div className="w-full p-2 flex justify-center flex-col sm:flex-row">
                    <div className="sm:w-fit mx-2">
                        <img src={product.photo_url} alt="book_cover" className="w-80 mx-auto mb-2 " />
                    </div>
                    <div className="p-4 sm:w-1/2 shadow-lg">

                        <h1 className="text-3xl">{product.name}</h1>
                        <h2 className="text-xl">{product.author}</h2>
                        <h2 className="text-xl">{product.year}</h2>
                        <h2 className="text-xl">${product.price}</h2>

                        <br></br>
                        
                        <h1 className="text-3xl">Descrição</h1>
                        <p>{product.description}</p>

                        <div className="container w-64 lg:w-2/4 ">
                            <Button text="Editar" onClick={() => navigate(`/produtos/${product.id}/editar-produto`)} />
                            <Button text="Remover" onClick={() => deleteProduct(params.id)} />
                            <Button text = "Voltar" onClick={() => navigate("/produtos")} />
                        </div>
                        
                    </div>
                </div>
                
            }
            
        </>
        
    );

}