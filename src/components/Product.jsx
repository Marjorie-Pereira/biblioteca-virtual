import { useNavigate } from "react-router";
import Button from "./Button";

export default function Product(props) {
    const navigate = useNavigate();
    function redirect() {
        navigate(`/produtos/${props.id}`);
    }
    return (
        <div className="bg-slate-200 hover:bg-slate-300 p-4 shadow-xl rounded-md text-center w-48 sm:w-58 flex flex-col flex-wrap justify-center">
            <img src={props.photo_url} alt="*book cover*" className="mb-2 mx-auto w-32" />
            
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>${props.price}</p>
            
            <div className="mt-auto">
                <Button text={"Ver mais"} onClick={redirect} /> 
            </div>
    
        </div>
        
    )
}