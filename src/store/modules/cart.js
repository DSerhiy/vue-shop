export default {
  namespaced: true,
  state: {
    products: []
  }, 
  getters: {
    getProducts(state) {
      return state.products;
    }, 
    cnt(state){
      return state.products.length;
    }
  }, 
  mutations: {
    addProduct(state, id_product) {
      if(state.products.indexOf(id_product) === -1)
        state.products.push(id_product);
    },
    removeProduct(state, id_product) {
      const pos = state.products.indexOf(id_product);

      if(pos !== -1)
        state.products.splice(pos, 1);
    }
  }, 
  actions: {
    addProduct(store, id_product) {
      store.commit('addProduct', id_product)
    },
    removeProduct(store, id_product) {
      store.commit('removeProduct', id_product)
    }
  }
}