<template>
  <div>
    <h1>{{product.title}}</h1>
    <router-link to="/products">Back to products</router-link>
    <hr>
    <div class="alert alert-success">price: {{product.price}} uhr</div>
    <button v-if="!isInCart"
            @click="addToCart(id)"
            class="btn btn-primary">
      Add to cart
    </button>
    <button v-else
            @click="removeFromcart(id)"
            class="btn btn-warning">
      Remove from cart
    </button>      
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters('products', {
      item: 'item'
    }), 
    id(){
      return Number(this.$route.params.id);
    },
    product() {
      return this.item(this.id);
      },
    ...mapGetters('cart', {
      productsInCart: 'getProducts'
    }),
    isInCart() {
      return this.productsInCart.indexOf(this.id) !== -1
      }
  }, 
  methods: {
    ...mapActions('cart', {
      addToCart: 'addProduct', 
      removeFromcart: 'removeProduct'
    })
  }
}
</script>

