<template>
  <div class="home">
    <header>
      <h1>Products</h1>
    </header>

<div class="product_card">
  <Card
v-for="product in products"
:key="product.name"
:name="product.name"
:image="product.image"
:price="product.price"
>
<Button @button-click="addItem(product)">Add to Cart</Button>
</Card>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
export default {
  name: 'Home',
  components: {
    Card,
    Button,
  },
  data: () => {
    return {
      products: [
{
    name: "HERO Strike Structure Deck",
    image: "https://img.fruugo.com/product/1/50/102679501_max.jpg",
    price: 18,
},
{
    name: "Synchron Extreme Structure Deck",
    image: "https://m.media-amazon.com/images/I/819ZltYxhML._AC_SL1500_.jpg",
    price: 23,
},
{
    name: "Structure Deck: Albaz Strike",
    image: "https://ms.yugipedia.com//a/af/SDAZ-DeckEN.png",
    price: 20,
},
{
    name: "Structure Deck: Freezing Chains",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TCM6RVQ-L._AC_SL1080_.jpg",
    price: 19,
},
{
    name: "Structure Deck: Cyberse Link",
    image: "https://i5.walmartimages.com/asr/7846fce4-134e-4160-92cf-8a7c20bbad67_1.31c09faa68d65721b56dd44fef747bf5.jpeg",
    price: 17,
},
{
    name: "Structure Deck: Soulburner",
    image: "https://m.media-amazon.com/images/I/71vH+u9qQlL._AC_SY606_.jpg",
    price: 18,
},
{
    name: "Gates of the Underworld Structure Deck",
    image: "https://djm-aaa1.kxcdn.com/resources/upload/products/81QN-k2OLGL._AC_SL1500_.jpg",
    price: 20,
},
{
    name: "Saga of Blue-Eyes White Dragon Structure Deck",
    image: "https://i5.walmartimages.com/asr/594f1c9c-67b3-4c6b-8cbc-96c3b4907ee5_1.8ec970d485a0c93718ea2772a72cc9c9.jpeg",
    price: 22,
},
{
    name: "Realm of Light Structure Deck",
    image: "https://m.media-amazon.com/images/I/81mkj8ba--L._AC_SY741_.jpg",
    price: 18,
},
{
    name: "Cyber Dragon Revolution Structure Deck",
    image: "https://m.media-amazon.com/images/I/81fEbL-yGAL._AC_SY679_.jpg",
    price: 21,
},
]
    }
  },
     computed: {
        carts() {
            return this.$store.state.cart;
        },
    },
     methods: {
    addItem(product){
      this.$store.commit("add", product);
    }
},

}
</script>

<style scoped>
.product_card{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>

