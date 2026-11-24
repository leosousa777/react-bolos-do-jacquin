export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg : number;
    imagem : string;
    categoriaIds : Number[]
    ativo : boolean
    categoria : Number
}

export type ProdutoRequest = Omit<Produto, 'ic'>