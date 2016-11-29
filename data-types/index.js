const faker = require('faker')
const user = faker.helpers.userCard
const product = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    product: faker.commerce.product()
  }
}

module.exports = {
  user,
  product
}
