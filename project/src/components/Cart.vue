<template>
<div>
        <h1>Your Cart({{carts.length}})</h1>
        <button v-on:click="clear()">Clear Cart</button>
        <h2 v-if="this.carts.length === 0">Please Don't Be Cheap and Spent More Money</h2>
        <h2 v-if="this.carts.length > 0">Total: ${{totals}}</h2>
    <div class="cart_items">
        <div v-for="cart in carts" :key="cart.name" class="cart_item">
             <h2>{{cart.name}}</h2>
        <img :src="cart.image" :alt="cart.name" class="cart_img"/>
        <h3>${{cart.price}}</h3>
        <button v-on:click="removeItem(cart)" class="remove_item">Remove from Cart</button>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: "Cart",
    components: {},
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
        totals () {
        return this.$store.state.cart.reduce(
          (total, product) => total + product.price, 0);
        }
    }
}
</script>

<style scoped>
.cart_items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cart_item {
  margin-top: 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.555);
  width: 30%;
  height: 500px;
  transition-duration: all ease 2s;
}

.cart_item:hover {
  transform: scale(1.05);
}
img {
  width: 30%;
  height: 50%;
}
.remove_item{
  width: 40%;
  height: 10%;
  background-color: aquamarine;
  font-size: 1rem;
}

</style>


