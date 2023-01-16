const url="http://localhost:3000/api/cadastro"

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

/* function getUser(){
    axios.get(url)
    .then(response =>{
        const data = response.data
        console.log(JSON.stringify(data))
    })
    .catch(error => console.log(error))
} 

getUser()*/

function cadastrarUsuario(){
    event.preventDefault()
    let newNome = document.getElementById("txtNome").value
    let newCpf = document.getElementById("txtCPF").value
    let newDataNascimento = document.getElementById("txtDataNascimento").value
    let newCep = document.getElementById("txtCep").value
    let newRua = document.getElementById("txtRua").value
    let newtxtNumero = document.getElementById("txtNumero").value
    let newComplemento = document.getElementById("txtComplemento").value
    let newBairro = document.getElementById("txtBairro").value
    let newCidade = document.getElementById("txtCidade").value
    let newEmail = document.getElementById("txtEmail").value
    let newCelular = document.getElementById("txtCelular").value
    let newSenha = document.getElementById("txtSenha").value

    newUser = {
        nome:newNome,
        cpf:newCpf,
        data_nasc:newDataNascimento,
        cep:newCep,
        rua:newRua,
        numero: newtxtNumero,
        complemento: newComplemento,
        bairro: newBairro,
        cidade: newCidade,
        email: newEmail,
        celular: newCelular,
        senha: newSenha
    }
    addNewUser(newUser)
}

function alterarUsuario(){
    let newNome = document.getElementById("txtNome").value
    let newCpf = document.getElementById("txtCPF").value
    let newDataNascimento = document.getElementById("txtDataNascimento").value
    alterUser = {
        nome:newNome,
        cpf:newCpf,
        data_nasc:newDataNascimento,
    }
    
    updateUser(alterUser)
}

function alterarContatos(){
    let newEmail = document.getElementById("txtEmail").value
    let newCelular = document.getElementById("txtCelular").value

    alterUser = {
        email: newEmail,
        celular: newCelular,
    }
    
    updateUser(alterUser)
}

function alterarEndereco(){
    let newCep = document.getElementById("txtCep").value
    let newRua = document.getElementById("txtRua").value
    let newNumero = document.getElementById("txtNumero").value
    let newComplemento = document.getElementById("txtComplemento").value
    let newBairro = document.getElementById("txtBairro").value
    
    alterUser = {
        cep:newCep,
        rua:newRua,
        numero: newNumero,
        complemento: newComplemento,
        bairro: newBairro
    }
    
    updateUser(alterUser)
}

function alterarSenha(){
    let newSenha = document.getElementById("txtSenhaNova").value
    
    alterUser = {
        senha:newSenha
    }
    
    updateUser(alterUser)
}

function addNewUser(newUser){
    axios.post(url, newUser, config)
    .then(response =>{
        console.log(response.data)    
    })
    .catch(error => console.log(error))
}

function updateUser(alterUser){
    axios.put(`${url}/6`,alterUser,config)
    .then(response =>{
        console.log(response.data)    
    })
    .catch(error => console.log(error))
}
