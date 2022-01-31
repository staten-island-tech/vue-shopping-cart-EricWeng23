<template>
    <div>
        <h1>Your Cart</h1>
        <h2>Cart({{carts.length}})</h2>
        <button v-on:click="clear()">Clear Cart</button>
        <div v-for="cart in carts" :key="cart">
        <h2>{{cart.name}}</h2>
        <h3>${{cart.price}}</h3>
        <button v-on:click="removeItem(cart)" class="remove_item">Remove from Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",
    components: {},
    methods: {
        removeItemfromCart(product) {
            this.$emit("removeItemfromCart", product);
        },
        clear() {
      this.carts.splice(0);
    }
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        },
         removeItem(cart) {
      this.cart.splice(cart);
    }
    }
}
</script>

