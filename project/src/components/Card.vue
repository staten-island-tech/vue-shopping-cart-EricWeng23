<template>
    <div class="product-card">
        <h2>{{name}}</h2>
        <img :src="image" alt="">
        <h2>${{price}}</h2>
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        name: String,
        image: String,
        price: Number,
    },
}
</script>

<style scoped>
.product-card{
    margin-top: 2rem;
    width: 28rem;
    height: 30rem;
    border: 0.0625rem solid lightgray;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.555);
    transition-duration: all ease 2s;
}
img {
  width: 30%;
  height: 50%;
}
.product-card:hover {
  transform: scale(1.05);
}

</style>