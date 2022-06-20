const Usuario = require('../../model/usuario');

module.exports = {
    async create(req, res, next) {
        const { nome, email, cpf, telefone, cep,
             estado, cidade, dataDeNascimento } = req.body;

        if (nome == undefined ||  nome == ''){
            res.status(406).json({ message: "Nome não preenchido"});
        }
        else if (email == undefined || email == ''){
            res.status(406).json({ message: "Email não preenchido"});
        }
        else if (cpf == undefined || cpf == ''){
            res.status(406).json({ message: "CPF não preenchido"});
        }
        else {
            Usuario.create({
                nome: nome,
                email: email,
                cpf: cpf,
                telefone: telefone,
                cep: cep,
                estado: estado,
                cidade: cidade,
                dataDeNascimento: dataDeNascimento
            }).then(post => {
                if (post != undefined){
                    res.status(200).json({ message: "Usuario cadastrado com sucesso"})
                }
                else {
                    next();
                }
            }).catch(err => {
                next(err);
            });
        }
    }
}