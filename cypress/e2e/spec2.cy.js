import login from '../e2e/login'
import bag from './purchase2'

describe('automatização de compra de um produto de eCommerce', () => {
  it('Eu, como Herói, desejo realizar a compra de bolsa', () => {
    
    login.go();
    bag.purchase2();
  })
})