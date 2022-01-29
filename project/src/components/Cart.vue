<template>
    <div>
        <h1>Your Cart</h1>
        <ul class="products">
            <Product v-for="product in cart" :key="product.name"
                :name="product.name"
                :price="product.price"
                />
        </ul>
    </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
    name: "Cart",
    components:{
      Product,
    },
    methods: {
        removeItemfromCart(product) {
            this.$emit("removeItemfromCart", product);
        }
    }
}
</script>

