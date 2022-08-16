let coxinhas = prompt('Deseja comer mais? \n [S] Sim \n [N] Não').toUpperCase()
let conta = 0
while (coxinhas === 'S') {
  conta = conta + 2.5
  coxinhas = prompt('Deseja comer mais? \n [S] Sim \n [N] Não').toUpperCase()
}
console.log(`Sua conta é de R$ ${conta}`)
