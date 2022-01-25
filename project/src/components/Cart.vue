<template>
    <div>
        <h1>Your Cart</h1>
        <ul class="products">
            <div v-for="(product, index) in cart" :key="index">
                <h2>{{product.name}}</h2>
                <img src="product.image" alt="">
                <h3>${{product.price}}</h3>
                <button v-on:click="removeItemfromCart(product)">Remove</button>
                </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["cart"],
    methods: {
        removeItemfromCart(product) {
            this.$emit("removeItemfromCart", product);
        }
    }
}
</script>