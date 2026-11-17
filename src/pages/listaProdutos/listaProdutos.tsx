import { Link } from 'react-router-dom';
import './listaProdutos.css'
import imgProduto from '../../assets/img/banner_1.png'
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import type { Produto } from '../../types/produto';
import produtoService from '../../services/protudoService';



function ListaProdutos() {
const [produtos, setProdutos] = useState<Produto[]>([]);
const [erro, setErro] = useState('');
const [carregando, setCarregando] = useState(true);

useEffect(() => {
    //Promise.call
 produtoService.listar()
 .then(lista => {setProdutos(lista), console.log(lista)})
 .catch(() => setErro("Não foi possivel carregar os produtos!"))
 .finally(() => setCarregando(false))
}, [])


    return (
        <>
         
            <main>
                <section className="prod_banner" />
                <section className="container prod_container">
                    <div className="box_h2">
                        <h1>Nossos Bolos</h1>
                        <span>Nos Gâteaux</span>
                        <hr />
                    </div>
                    {carregando && <p>Carregando produtos...</p>}
                    {carregando && !erro && produtos.length === 0 && <p>Nenhum produto encontrado.</p>}
                    <div className="prod_cards">

                          {produtos.map(produto => {  
                          return  <Card 
                              id={produto.id}
                              imgProduto={`http://localhost:3000${produto.imagem}`}
                              nome={produto.nome}
                              descricao={produto.descricaoCurta}
                              valor={produto.precoPorkg}
                              quantidadeAvaliacoes={10}
                              nota={9.5} id={0}/>})}


                          
                    </div>
                </section>
            </main>
           
        </>
    )
}

export default ListaProdutos;