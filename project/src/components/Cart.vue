<template>
  <div class="cart-content">
    <h2>Your cart</h2>

    <table v-if="cart.length > 0" class="cart-table">
          <tr class="cart-header">
            <th class="cart-names">Name</th>
            <th class="cart-images">Image</th>
            <th class="cart-prices">Price</th>
          </tr>
          <tr v-for="product in cart" :key="product.name">
            <td>{{product.name}}.</td>
            <td>{{item.img}}</td>
            <td>$ {{product.price}}</td>
          </tr>
      </table>

      <p v-else>Your cart is empty</p>
  </div>
</template>

<script>

export default {
  computed: {
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout(){
      alert('Pay us $' + this.total)
    }
  }
}
</script>

