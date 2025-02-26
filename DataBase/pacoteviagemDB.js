import conectar from "./conexao.js";
import PacoteViagem from "../Model/PacoteViagem.js";
export default class pacoteviagemDB{

    constructor(){
        this.init();
    }
    async init(){
        try {
            const conexao = await conectar();
            const sql = `CREATE TABLE IF NOT EXISTS pacoteviagem (
                id VARCHAR(100) NOT NULL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                destino VARCHAR(150) NOT NULL,
                data VARCHAR(10) NOT NULL,
                preco VARCHAR(100) NOT NULL,
                descricao VARCHAR(500) NOT NULL,
                duracao VARCHAR(50) NOT NULL,
                localpartida VARCHAR(100) NOT NULL,
                quantidadelugares VARCHAR(100) NOT NULL,
                imagem VARCHAR(300) NOT NULL
            )`;
            await conexao.execute(sql);
        } catch ( erro ) {
            console.log("Erro ao iniciar a tabela pacoteviagem:" + erro);
        }

    }

    async gravar(pacoteviagem){
        if (pacoteviagem instanceof PacoteViagem){
            const conexao = await conectar();
            const sql = `INSERT INTO cliente (id, nome, destino, data, preco, descricao, duracao, localpartida, quantidadelugares, imagem)
                         VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )`;
            const parametros = [
                pacoteviagem.id,
                pacoteviagem.nome,
                pacoteviagem.destino,
                pacoteviagem.data,
                pacoteviagem.preco,
                pacoteviagem.descricao,
                pacoteviagem.duracao,
                pacoteviagem.localpartida,
                pacoteviagem.quantidadelugares,
                pacoteviagem.imagem
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
                         
        }
    }
    async alterar(pacoteviagem){
        if (pacoteviagem instanceof PacoteViagem){
            const conexao = await conectar();
            const sql = `UPDATE pacotevigem SET 
                         nome = ?, destino = ?, data = ?, preco = ?,
                         descricao = ?, duracao = ?, localpartida = ?, quantidadelugares = ?,
                         imagem = ? WHERE id = ?`;            
            const parametros = [
                pacoteviagem.id,
                pacoteviagem.nome,
                pacoteviagem.destino,
                pacoteviagem.data,
                pacoteviagem.preco,
                pacoteviagem.descricao,
                pacoteviagem.duracao,
                pacoteviagem.localpartida,
                pacoteviagem.quantidadelugares,
                pacoteviagem.imagem
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }
    async excluir(pacoteviagem){
        if (pacoteviagem instanceof PacoteViagem){
            const conexao = await conectar();
            const sql = `DELETE FROM pacoteviagem WHERE id = ?`;
            const parametros = [pacoteviagem.id];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }
    async consultar(){
        const conexao = await conectar();
        const sql = `SELECT * FROM pacoteviagem ORDER BY nome`;
        const [registros, campos] = await conexao.execute(sql);
        await conexao.release();
        let listaPacoteViagem = [];
        for (const registro of registros){
            const pacoteviagem = new PacoteViagem(registro.id,
                                                    registro.nome,
                                                    registro.destino,
                                                    registro.data,
                                                    registro.preco,
                                                    registro.descricao,
                                                    registro.duracao,
                                                    registro.localpartida,
                                                    registro.quantidadelugares,
                                                    registro.imagem,
                                        );
            listaClientes.push(pacoteviagem);
                                    
        }
        return listaPacoteViagem;
    }
}