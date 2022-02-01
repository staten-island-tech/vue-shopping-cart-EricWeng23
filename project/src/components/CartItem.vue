<template>
    <div class="cart_items">
        <div class="cart_item">
            <h2 class="cart_name">{{name}}</h2>
            <h2 class="cart_price">${{price}}</h2>
            <img :src="image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        name: String,
        image: String,
        price: Number,
    }
}
</script>
