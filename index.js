var troco = 0;
var dinheiroInserido = 0;
var msg = "";
var mensagemEl = document.getElementById("mensagem");

var doces = ["Doca, Docb, Docc"];
const price = 6;


var totalPago = 0;

const moeda_um = 1;
const moeda_dois = 2;
const moeda_cinco = 5;

function getTotal(){

  var moeda_uns = Number(document.getElementById("uns").value);
  var moeda_doiss = Number(document.getElementById("doiss").value);
  var moeda_cincos = Number(document.getElementById("cincos").value);
   

  if (moeda_uns > 0) { 
    moeda_uns = moeda_uns * moeda_um;
  }

  if (moeda_doiss > 0) {
      moeda_doiss = moeda_doiss * moeda_dois;
  }
  if (moeda_cincos > 0) {
      moeda_cincos = moeda_cincos * moeda_cinco;
  }

  totalPago = moeda_uns + moeda_doiss + moeda_cincos;

  return totalPago.toFixed(2);
  
}

function contar(){
    dinheiroInserido= getTotal();
    document.getElementById("pago").innerHTML = dinheiroInserido;
}

function limparConta(){
  dinheiroInserido= 0;
  document.getElementById("pago").innerHTML = dinheiroInserido;
}

function limparForm(){
  document.getElementById("uns").value = 0;
  document.getElementById("doiss").value = 0;
  document.getElementById("cincos").value = 0;
}

function cancel(){
  getTotal();
  if(totalPago > 0){
    msg = "Transação cancelada. $" + totalPago.toFixed(2) + " foi devolvido.";

    limparConta();
    limparForm();

    mensagemEl.innerHTML = msg;
  } else if (totalPago == 0){
      msg = " Insira o dinheiro primeiro. Selecione o doce."

    mensagemEl.innerHTML = msg;
  }
}







function calcularTroco(){
  var tempTroco = 0;

  if(getTotal() != 0){
    return (tempTroco = (getTotal() - price).toFixed(2));
  }

  return tempTroco.toFixed(2);

}

function liberarDoce(doce){

  mensagemEl.innerHTML = " ";
  troco = 0;

  var selecionarDoce = doces[doce];

  troco = calcularTroco();

  if(troco < 0){
      msg = "Você não pagou o suficiente. $" + totalPago.toFixed(2) + " foi devolvido.";

      totalPago = 0;
      troco = 0;
      limparConta();
      limparForm();

      mensagemEl.innerHTML = msg;

  } else if (troco > 0){
    msg = selecionarDoce + "foi liberado. Você recebeu $" + troco + " de troco";

    totalPago = 0;
    troco = 0;
    limparConta();
    limparForm();

    mensagemEl.innerHTML = msg;
  } else if (totalPago == 0){
    msg = "Por favor, insira o dinheiro antes de selecionar o doce."
    mensagemEl.innerHTML = msg;
  } else if (troco == 0){
    msg = selecionarDoce + "foi liberado."
    
    totalPago = 0;
    troco = 0;
    limparConta();
    limparForm();

    mensagemEl.innerHTML = msg;
  }
}