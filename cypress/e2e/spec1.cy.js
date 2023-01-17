import login from '../e2e/login'
import tshirt from './purchase1'

describe('automatização de compra de um produto de eCommerce', () => {
  it('Eu, como Herói, desejo realizar a compra de camisa vermelha', () => {
    
    login.go();
    tshirt.purchase();
  })
})