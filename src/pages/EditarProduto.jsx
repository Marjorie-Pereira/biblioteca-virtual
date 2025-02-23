import { useNavigate, useParams } from "react-router";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import useFormApi from "../hooks/useFormApi";

export default function EditarProduto() {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState({});
    const { putProduct } = useFormApi("PATCH");

    function getProduct() {
        fetch(`https://biblioteca-virtual-yj8s.onrender.com/book/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        });

    }
    useEffect(() => {
        getProduct();
    }, []);     
   
    
  return (
    <>
        { product &&
            <div>
            <h1 className="text-3xl text-center">Editar Produto</h1>
            < Formulario onSubmit={(e) => {e.preventDefault(); putProduct(e.target, params.id); }} produto = {product} path={`produtos/${params.id}`} />
            </div>
        }
    </>
    
    
    
  )

   
}