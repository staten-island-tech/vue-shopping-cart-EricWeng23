<template>
    <div>
        <h1>Your Cart</h1>
        <Product v-bind:Cart="cart"/>
        <Product v-for="product in Cart" :key="product.name"
        :name="product.name"
        :price="product.price"/>
    </div>
</template>

<script>
import Product from "../components/Product.vue"
export default {
    name: "Cart",
    components: {Product,},
    methods: {
        removeItemfromCart(product) {
            this.$emit("removeItemfromCart", product);
        }
    }
}
</script>

