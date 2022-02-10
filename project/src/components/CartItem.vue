<template>
    <div class="cart_items">
            <h2 class="cart_name">{{name}}</h2>
            <img src="img" alt="">
            <h2 class="cart_price">${{price}}</h2>
            <button v-on:click="removeItem(cart)" class="remove_item">Remove from Cart</button>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        name: String,
        image: String,
        price: Number,
    },
     methods: {
       removeItem(cart) {
      this.$store.commit("remove", cart);
    },  
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        },
    }
}
</script>

<style scoped>
.cart_items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.cart_items {
  margin-top: 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.555);
  width: 30%;
  height: 500px;
  transition-duration: all ease 2s;
}

.cart_items:hover {
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
