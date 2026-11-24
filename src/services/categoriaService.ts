import type { Categoria } from "../types/Categoria";
import { api } from "./api";

const categoriaService = {
    async listar() {
        const reposta = await api.get<Categoria[]>('categorias');
        return reposta.data;
    }
}

export default categoriaService