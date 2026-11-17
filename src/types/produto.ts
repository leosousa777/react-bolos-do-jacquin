export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorkg : number;
    imagem : string;
    categoriaIds : number[]
}