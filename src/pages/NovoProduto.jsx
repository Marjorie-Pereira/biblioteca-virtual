import Formulario from "../components/Formulario";
import useFormApi from "../hooks/useFormApi";

export default function NovoProduto() {

    
    const { postProduct } = useFormApi();

    
    return (
        <div>
            <h1 className="text-3xl text-center">Novo Produto</h1>
            < Formulario onSubmit={(e) => {e.preventDefault(); postProduct(e.target)}} path="produtos" />
            
        </div>
        
    ) 
}