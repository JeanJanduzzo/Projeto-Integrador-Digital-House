const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, reijeitado) =>{
            db.query('SELECT * FROM cadastro',(error, results)=>{
                if(error){reijeitado(error); return;}
                aceito(results);
            });
        });
    },

    inserir: (nome, cpf, data_nasc, cep, rua, numero, complemento, bairro, cidade, email, celular, senha) =>{
        return new Promise((aceito, reijeitado) =>{
            db.query('INSERT INTO cadastro (nome, cpf, data_nasc, cep, rua, numero, complemento, bairro, cidade, email, celular, senha) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                [nome, cpf, data_nasc, cep, rua, numero, complemento, bairro, cidade, email, celular, senha],
                (error, results)=>{
                    if(error){reijeitado(error); return;}
                    aceito(results.inserirCodigo);
            });
        });
    },

    alterar:(idcadastro, nome, cpf, data_nasc)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE cadastro SET nome = ?, cpf = ?, data_nasc = ? WHERE idcadastro = ?',
                [nome, cpf, data_nasc, idcadastro],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    alterarContatos:(idcadastro, email, celular)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE cadastro SET email = ?, celular = ? WHERE idcadastro = ?',
                [email, celular, idcadastro],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    alterarEndereco:(idcadastro, cep, rua, numero, complemento, bairro)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE cadastro SET cep = ?, rua = ?, numero = ?, complemento = ?, bairro = ? WHERE idcadastro = ?',
                [cep, rua, numero, complemento, bairro, idcadastro],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    alterarSenha:(idcadastro, senha)=> {
        console.log('teste ao entrar service');
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE cadastro SET senha = ? WHERE idcadastro = ?',
                [senha, idcadastro],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
};


