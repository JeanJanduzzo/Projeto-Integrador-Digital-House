const CadastroService = require('../services/CadastroService');

module.exports = {
    
    buscarTodos: async(req, res) =>{
        let json = {error:'',result:[]};

        let cadastro = await CadastroService.buscarTodos();

        for(let i in cadastro){
            json.result.push({
                idcadastro: cadastro[i].idcadastro,
                nome: cadastro[i].nome,
                cpf: cadastro[i].cpf,
                data_nasc: cadastro[i].data_nasc,
                cep: cadastro[i].cep,
                rua: cadastro[i].rua,
                numero: cadastro[i].numero,
                complemento: cadastro[i].complemento,
                bairro: cadastro[i].bairro,
                cidade: cadastro[i].cidade,
                email: cadastro[i].email,
                celular: cadastro[i].celular,
                senha: cadastro[i].senha
            });
        }
        res.json(json);
    },

    inserir: async(req, res) =>{
        let json = {error:'',result:{}};

        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let data_nasc = req.body.data_nasc;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let email = req.body.email;
        let celular = req.body.celular;
        let senha = req.body.senha;

        if( nome && cpf ){
            let Codigo = await CadastroService.inserir(nome, cpf, data_nasc, cep, rua, numero, complemento, bairro, cidade, email, celular, senha);
            
            json.result = {
                idcadastro: Codigo,
                nome,
                cpf,
                data_nasc,
                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                email,
                celular,
                senha
            };
        }else{
            json.error = 'Campos não enviados para o insert';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let idcadastro = req.params.idcadastro;
        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let data_nasc = req.body.data_nasc;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let email = req.body.email;
        let celular = req.body.celular;
        let senha = req.body.senha;
        if (idcadastro && nome && cpf){
            await CadastroService.alterar(idcadastro, nome, cpf,data_nasc);
            json.result = {
                idcadastro,
                nome,
                cpf,
                data_nasc
            };
        }
        if(idcadastro && email && celular){
            await CadastroService.alterarContatos(idcadastro, email, celular);
            json.result = {
                idcadastro,
                email,
                celular
            };
        }
        if(idcadastro && cep && rua && numero && complemento && bairro){

            await CadastroService.alterarEndereco(idcadastro, cep, rua, numero, complemento, bairro);
            json.result = {
                idcadastro,
                cep,
                rua,
                numero,
                complemento,
                bairro
            };
        }
        if(idcadastro && senha){

            await CadastroService.alterarSenha(idcadastro, senha);
            json.result = {
                idcadastro,
                senha
            };
        }
        else{
            json.error = 'Campos não enviados para o alterar';
        }
        res.json(json);
    },
}


