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
        
        fetch('https://biblioteca-virtual-yj8s.onrender.com/book', {
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
        
        fetch(`https://biblioteca-virtual-yj8s.onrender.com/book/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        }).then(() => {alert('Livro editado com sucesso!'); navigate(`/produtos/${id}`)});
    }

    function deleteProduct(id) {
        let confirmar = confirm('Tem certeza?');
        if(confirmar) {
            fetch(`https://biblioteca-virtual-yj8s.onrender.com/book/${id}`, { method: 'DELETE'})
            .then(() => { 
                navigate('/produtos');
                alert('Livro deletado com sucesso!');
            });
        }
        
    }

    if(method == "PATCH") {
        return { putProduct };
    } else if (method == "DELETE") {
        return { deleteProduct };
    } else {
        return { postProduct };
    }
}