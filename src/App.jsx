import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Produtos from './pages/Produtos';
import Home from './pages/Home';
import ProdutoPage from './pages/ProdutoPage';
import NovoProduto from './pages/NovoProduto';
import EditarProduto from './pages/EditarProduto';

function App() {


  
  return (
    <>
     
      <BrowserRouter basename='/biblioteca-virtual'>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path='/produtos/:id/*' element={< ProdutoPage />} />
            <Route path="produtos/:id/editar-produto" element={<EditarProduto/>} />
            <Route path='/novo-produto' element={<NovoProduto />} />
          </Route>
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
