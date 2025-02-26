import PacoteViagem from "./Model/PacoteViagem.js";


var pacoteviagem = new PacoteViagem("");



pacoteviagem.gravar().then(() => {
    console.log("Pacote de viagem gravado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao gravar o Pacote de viagem: " + erro);
});

/*pacoteviagem.alterar().then(() => {
    console.log("Pacote de viagem alterado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao alterar o Pacote de viagem: " + erro);
});*/

/*pacoteviagem.excluir().then(() => {
    console.log("Pacote de viagem excluido com sucesso!");
}).catch((erro) => {
    console.log("Erro ao excluir o pacote de viagem: " + erro);
})

/*pacoteviagem.consultar().then((listaPacoteViagem) => {
    for (const pacoteviagem of listaPacoteViagem) {
        console.log(pacoteviagem.toJSON());
    }
});*/