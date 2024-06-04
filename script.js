async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro")
  mensagemErro.innerHTML = ""
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaConvertida = await consultaCep.json()
    if (consultaConvertida.erro) {
      throw Error("CEP não existente")
    }
    var cidade = document.getElementById("cidade")
    var logradouro = document.getElementById("endereco")
    var estado = document.getElementById("estado")

    cidade.value = consultaConvertida.localidade
    logradouro.value = consultaConvertida.logradouro
    estado.value = consultaConvertida.uf
    console.log(consultaConvertida)
    return consultaConvertida
  } catch (erro) {
    mensagemErro.innerHTML = "<p> CEP inválido. Tente novamente! </p>"
    console.log(erro)
  }
}

var cep = document.getElementById("cep")
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
