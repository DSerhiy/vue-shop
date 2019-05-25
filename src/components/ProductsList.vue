<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div class="col col-sm-4"
           v-for="(product, index) in products"
           :key="index">
        <router-link tag="h3" :to="'products/' + product.id_product"> 
          <a>{{product.title}}</a>
        </router-link>
        <h3></h3>
        <div>{{product.price}}</div>
        <button v-if="getProducts.indexOf(product.id_product) === -1"
                @click="addToCart(product.id_product)"
                class="btn btn-primary">
          Add to cart</button>
        <button v-else
                @click="removeFromCart(product.id_product)"
                class="btn btn-warning">
          Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters('products', [
      'products'
    ]), 
    ...mapGetters('cart', [
      'getProducts'
    ]), 

  }, 
  methods: {
    ...mapActions('cart', {
      addToCart: 'addProduct', 
      removeFromCart: 'removeProduct'
    })
  }
}
</script>

<style scoped>
  .row{
    padding-left: 15px;
  }

  .btn {
    margin-top: 10px;
  }
</style>


