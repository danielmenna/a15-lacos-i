const maioresPaises = ['Rússia', 'Canadá', 'China', 'EUA', 'Brasil']
let posicao = 0
for (var i = 0; i < maioresPaises.length; i++) {
  posicao = i + 1
  console.log(`${posicao} - ${maioresPaises[i]}`)
}
