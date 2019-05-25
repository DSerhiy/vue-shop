export default {
  namespaced: true,
  state: {
    products: getProducts()
  }, 
  getters: {
    products(state) {
      return state.products;
    }, 
    item: (state) => (id) => {return state.products.find(item => item.id_product === id)}
  }, 
  mutations: {

  }, 
  actions: {
    
  }
}

function getProducts() {
  return [
    {
      id_product: 15,
      title: 'Iphone 5',
      price: 20000
    },
    {
      id_product: 10,
      title: 'Iphone 6',
      price: 25000
    },
    {
      id_product: 35,
      title: 'Iphone 7',
      price: 30000
    }
  ]
}