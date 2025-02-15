import { useNavigate } from "react-router";

export default function useFormApi(method = "POST") {

    const navigate = useNavigate();
    function postProduct(form) {
        let novoProduto = {}
        const data = new FormData(form)
        for(let [key, value] of data) {
            if(undefined) continue
            else if(key == 'price') {
                value = Number(value);
            }
            novoProduto[key] = value;
        }
        
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        }).then(() => {alert('Livro cadastrado com sucesso!'); navigate('/produtos')});
    }

    function putProduct(form, id) {
        let novoProduto = {}
        const data = new FormData(form)
        for(let [key, value] of data) {
            if(undefined) continue
            else if(key == 'price') {
                value = Number(value);
            }
            novoProduto[key] = value;
        }
        
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        }).then(() => {alert('Livro editado com sucesso!'); navigate(`/produtos/${id}`)});
    }

    function deleteProduct(id) {
        let confirmar = confirm('Tem certeza?');
        if(confirmar) {
            fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE'})
            .then(() => { 
                navigate('/produtos');
                alert('Livro deletado com sucesso!');
            });
        }
        
    }

    if(method == "PUT") {
        return { putProduct };
    } else if (method == "DELETE") {
        return { deleteProduct };
    } else {
        return { postProduct };
    }
}