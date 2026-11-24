export type Usuario = {
    id : number;
    email : string;

};

export type RespostaLogin = {
    accessToken: string;
    user: Usuario;
}