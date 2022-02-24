//<, 
// Obtendo acesso aos inputs.
  let nome = document.getElementById('Inp.nome')
  let idade = document.getElementById('Inp.idade')
  let cidade = document.getElementById('Inp.cidade')
  let carro = document.getElementById('Inp.carro')
// 
//  Obetendo acesso a paragrafos onde será renderizado o resultado.
  let resnome = document.getElementById('RESnome')
  let rescod = document.getElementById('REScod')
  let residade = document.getElementById('RESidade')
  let rescidade = document.getElementById('REScidade')
  let rescarro = document.getElementById('REScarro')
// 
// Obtendo acesso aos clientes.
  let cliente1 = document.getElementById('cliente1')
  let cliente2 = document.getElementById('cliente2')
  let cliente3 = document.getElementById('cliente3')
  let cliente4 = document.getElementById('cliente4')
  let list = [cliente1, cliente2, cliente3, cliente4] //este array serve para armazenar objetos em clientes
  let list2 = [cliente1, cliente2, cliente3, cliente4] //este array serve para renderização
// 
let ford = {} // array para armazenar clientes
let n = 0 

function cadastrar(){ // função onde será cadastrado o cliente
  
  if(nome.value == false || idade.value == false || cidade.value == false || carro.value == false){
    window.alert('Verifique se as informações estão corretas.') //condição para que nenhum campo passe em branco
  }else{
    if(n <= list.length-1){ //condição para que não registre mais do que 4 clientes.
    ford[`cliente#${n}`] = {nome: nome.value, idade: idade.value, cidade: cidade.value, carro: carro.value } // irá adicionar um novo atributo chamado cliente#cod ao objeto list(na qual tem a função de armazenar informações do cliente)
    list[n] = ford['cliente#'+n] // irá definir o local do cliente dentro do array list
    list2[n].textContent = `${n+1}º CLIENTE CADASTRADO.` //renderiza que um novo cliente foi cadastrado
    list2[n].style.opacity = '100%' 
  }
}
  n++
}

function cliente(a){ // renderiza as informações de cada cliente cadastrado
  if(list2[a].style.opacity == 1){ // condição para que não renderize um cliente que não foi cadastrado.
  rescod.textContent = ('Código do cliente #' + a).toUpperCase()
  resnome.textContent = list[a]['nome'].toUpperCase()
  rescidade.textContent = list[a]['cidade'].toUpperCase()
  residade.textContent = list[a]['idade'].toUpperCase()
  rescarro.textContent = list[a]['carro'].toUpperCase()
}
}