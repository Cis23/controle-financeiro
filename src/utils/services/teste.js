const arrTeste = [
  {desc: "Compra de utencílios", type: "Saída", value: 100},
  {desc: "Serviço prestado web", type: "Entrada", value: 2000},
  {desc: "Serviço prestado power bi", type: "Entrada", value: 500},
  {desc: "Compra de material de escritório", type: "Saída", value: 2000},
  {desc: "Compra de utencílios", type: "Saída", value: 100},
]

const entradas = arrTeste
  .filter(({type}) => type == "Entrada")
  .map(({value}) => value);

const saidas = arrTeste
  .filter(({type}) => type == "Saída")
  .map(({value}) => value);

const totalEntradas = entradas.reduce((ant, prox) => ant + prox, 0).toFixed(2);
const totalSaidas = saidas.reduce((ant, prox) => ant + prox, 0).toFixed(2);
const saldo = Math.abs(totalEntradas - totalSaidas).toFixed(2);
const saldoFormat = `R$ ${totalEntradas < totalSaidas ? "-" : ""}${saldo}`;

// console.log(saldoFormat);



const teste = 'as' - 6
console.log(isNaN(teste) ? 0 : teste)