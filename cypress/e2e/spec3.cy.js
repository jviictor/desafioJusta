import login from '../e2e/login'
import cheap from '../e2e/purchase3'

describe('automatização de compra de um produto de eCommerce', () => {
  it(' Eu, como Herói, quero ordenar os valores do menor para o maior e que seja comprado os dois produtos menores.', () => {
    
    login.go();
    cheap.order();
  })
})