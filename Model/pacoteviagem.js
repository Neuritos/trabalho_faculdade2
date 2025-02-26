//Programação orientada a objeto
import PacoteViagemDB from "../DataBase/PacoteViagemDB.js";
export default class PacoteViagem {

    #id; 
    #nome;
    #destino; 
    #data;
    #preco;
    #descricao;
    #duracao;
    #localPartida;
    #quantidadeLugares;
    #imagem;

    constructor(id, nome, destino, data, preco, descricao, duracao, localPartida, quantidadeLugares, imagem) {
        this.#id = id;
        this.#nome = nome;
        this.#destino = destino;
        this.#data = data;
        this.#preco = preco;
        this.#descricao = descricao;
        this.#duracao = duracao;
        this.#localPartida = localPartida;
        this.#quantidadeLugares = quantidadeLugares;
        this.#imagem = imagem;
    }

    

    get id() {
        return this.#id; //this se refere ao próprio objeto
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {    
        this.#nome = novoNome;
    }

    get destino() {
        return this.#destino;
    }

    set destino(novoDestino) {
        this.#destino = novoDestino;
    }

    get data() {
        return this.#data;
    }

    set data(novaData){
        this.#data = novaData;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco){
        this.#preco = novoPreco;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novaDescricao){
        this.#descricao = novaDescricao;
    }

    get duracao(){
        return this.#duracao;
    }	

    set duracao(novaDuracao){
        this.#duracao = novaDuracao;
    }

    get localPartida(){
        return this.#localPartida;
    }

    set localPartida(novolocalPartida){
        this.#localPartida = novolocalPartida;
    }

    get quantidadeLugares(){
        return this.#quantidadeLugares;
    }

    set quantidadeLugares(novaquantidadeLugares){
        this.#quantidadeLugares = novaquantidadeLugares;
    }

    get imagem(){
        return this.#imagem;
    }

    set imagem (novaImagem){
        this.#imagem = novaImagem;
    }
 
  
    toJSON(){
        return {
            "id": this.#id,
            "nome": this.#nome,
            "destino": this.#destino,
            "data": this.#data,
            "preco": this.#preco,
            "descricao": this.#descricao,
            "duracao": this.#duracao,
            "localpartida": this.#localPartida,
            "quantidadelugares": this.#quantidadeLugares,
            "imagem": this.#imagem,

        }
    }

    async gravar(){
        const pvDB = new PacoteViagemDB();
        pvDB.gravar(this);
    }

    async alterar(){
        const pvDB = new PacoteViagemDB();
        pvDB.alterar(this);
    }

    async excluir(){
        const pvDB = new PacoteViagemDB();
        pvDB.excluir(this);
    }

    async consultar(){
        const pvDB = new PacoteViagemDB();
        return await pvDB.consultar(this);
    }

}