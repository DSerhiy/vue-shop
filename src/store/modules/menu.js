export default {
  namespaced: true,
  state: {
    menuList: [
      {
        name: 'Poducts',
        path: '/products'
      },
      {
        name: 'Cart',
        path: '/cart'
      },
      {
        name: 'Checkout',
        path: '/checkout'
      }
    ]

  }, 
  getters: {
    menuList(state) {
      return state.menuList;
    }
  }, 
  mutations: {

  }, 
  actions: {
    
  }
}