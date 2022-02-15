<template>
  <div class="about">
     <h1>Your Cart({{carts.length}})</h1>
        <Button @click="clear()">Clear Cart</Button>
        <h2 v-if="this.carts.length === 0">Please Don't Be Cheap and Spent More Money</h2>
        <h2 v-if="this.carts.length > 0">Total: ${{totals}}</h2>
      <div class="cart_card">
  <Card
v-for="cart in carts"
:key="cart.name"
:name="cart.name"
:image="cart.image"
:price="cart.price"
>
<Button @click="removeItem(cart)" class="add_item">Remove From Cart</Button>
</Card>
</div>
  </div>
  
</template>


<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
export default {
  components: {
    Card,
    Button,
  },
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
.cart_card{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>