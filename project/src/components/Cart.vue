<template>
    <div>
        <h1>Your Cart</h1>
        <CartItem v-for="cart in carts" :key="cart"
        :name="cart.name"
        :price="cart.price"/>
    </div>
</template>

<script>
import CartItem from "../components/CartItem.vue"
export default {
    name: "Cart",
    components: {CartItem,},
    methods: {
        removeItemfromCart(product) {
            this.$emit("removeItemfromCart", product);
        }
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        }
    }
}
</script>

