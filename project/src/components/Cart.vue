<template>
<div>
        <h1>Your Cart({{carts.length}})</h1>
        <button v-on:click="clear()">Clear Cart</button>
        <h2 v-if="this.carts.length === 0">Please Don't Be Cheap and Spent More Money</h2>
        <h2 v-if="this.carts.length > 0">Total: ${{total}}</h2>
    <div class="cart_items">
        <CartItem v-for="cart in carts" 
        :key="cart.name" 
        :name="cart.name"
        :image="cart.img"
        :price="cart.price"
        />
    </div>
    
</div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
    name: "Cart",
    components: {CartItem},
    methods: {
        clear() {
      this.carts.splice(0);
    },
       removeItem(cart) {
      this.$store.commit("remove", cart);
    },  
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        },
        totals() {
          return this.$store.state.total;
        }
    }
}
</script>

<style scoped>

</style>


