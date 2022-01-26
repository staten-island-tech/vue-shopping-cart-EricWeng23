<template>
  <div class="cart-content">
    <h2>Your cart</h2>

    <table v-if="cart.length">
        <thead >
          <tr>
            <th>Item Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in items" :key="product.name">
            <td>{{index + 1}}.</td>
            <td>{{item.img}}</td>
            <td>$ {{item.price}}</td>
          </tr>
        </tbody>
      </table>

      <p v-else>Your cart is empty. 😞</p>
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

