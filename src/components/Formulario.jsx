import { useNavigate } from "react-router";



export default function Formulario(props) {
    const navigate = useNavigate();
    let produtoAnterior = props.produto;
    return (
        <form onSubmit={props.onSubmit} className="container sm:w-1/2 shadow-lg p-4 flex flex-col gap-2 mx-auto my-4 bg-slate-200 rounded-md">
            <label htmlFor="name">Título:</label>
            <input name="name" type="text" defaultValue={produtoAnterior ? produtoAnterior.name : ""} required />

            <label htmlFor="author">Autor:</label>
            <input name="author" type="text" defaultValue={produtoAnterior ? produtoAnterior.author : ""}  required />

            <label htmlFor="year">Ano:</label>
            <input name="year" type="text" defaultValue={produtoAnterior ? produtoAnterior.year : "" } required />
 
            <label htmlFor="description">Descrição:</label>
            <input name="description" type="text" defaultValue={produtoAnterior ? produtoAnterior.description : ""}  required />

            <label htmlFor="price">Preço:</label>
            <input name="price" type="number" step={0.01} defaultValue={produtoAnterior ? produtoAnterior.price : ""} required />

            <label htmlFor="photo_url">URL da imagem:</label>
            <input name="photo_url" type="text" defaultValue={produtoAnterior ? produtoAnterior.photo_url : ""} required />

            <button type="submit" id="submit-btn" className="w-full block bg-slate-800 text-white p-2 rounded-full mt-2 hover:bg-slate-700">Salvar</button>
            <button type="button" id="submit-btn" onClick={() => navigate(`/${props.path}`)} className="w-full block bg-slate-800 text-white p-2 rounded-full mt-2 hover:bg-slate-700">Voltar</button>
        </form>
    );

    
}