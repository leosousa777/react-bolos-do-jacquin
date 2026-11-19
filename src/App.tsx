import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/listaProdutos";
import DetProduto from "./pages/detProduto/DetProtudo";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/admProdutos";



export default function App(){
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>}/>
            <Route path="/detalheProduto/:id" element={<DetProduto/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/AdmProdutos" element={<AdmProdutos/>}/>
            <Route path="*" 
            element={
<img className="container-notfound" src="https://www.sasip.lk/assets/404-Page-COuZkfvk.gif" alt="imagem de não encontrado"/>
            } />
         </Routes>
        <Footer />
        </>
    )
}