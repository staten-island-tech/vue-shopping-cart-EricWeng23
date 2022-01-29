<template>

<div>
  <header>{{cart.length}} Items in Cart
    </header>

    <h1>Products</h1>
    

<section class="products">
    <div v-for="product in products" :key="product.name" class="product">
        <h2>{{product.name}}</h2>
        <img :src="product.image" :alt="product.name" class="product_img"/>
        <h3>${{product.price}}</h3>
        <button v-on:click="addItem(product)" class="add_item">Add to Cart</button>
    </div>
</section>

</div>
</template>


<script>
export default {
  name: "Product",
  components: {},
  data: () => {
    return {
      cart:[],
      products: [
{
    id: 1,
    name: "HERO Strike Structure Deck",
    image: "https://img.fruugo.com/product/1/50/102679501_max.jpg",
    price: 18,
},
{
    id: 2,
    name: "Synchron Extreme Structure Deck",
    image: "https://m.media-amazon.com/images/I/819ZltYxhML._AC_SL1500_.jpg",
    price: 23,
},
{
    id: 3,
    name: "Structure Deck: Albaz Strike",
    image: "https://ms.yugipedia.com//a/af/SDAZ-DeckEN.png",
    price: 20,
},
{
    id: 4,
    name: "Structure Deck: Freezing Chains",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TCM6RVQ-L._AC_SL1080_.jpg",
    price: 19,
},
{
    id: 5,
    name: "Structure Deck: Cyberse Link",
    image: "https://i5.walmartimages.com/asr/7846fce4-134e-4160-92cf-8a7c20bbad67_1.31c09faa68d65721b56dd44fef747bf5.jpeg",
    price: 17,
},
{
    id: 6,
    name: "Structure Deck: Soulburner",
    image: "https://m.media-amazon.com/images/I/71vH+u9qQlL._AC_SY606_.jpg",
    price: 18,
},
{
    id: 7,
    name: "Gates of the Underworld Structure Deck",
    image: "https://djm-aaa1.kxcdn.com/resources/upload/products/81QN-k2OLGL._AC_SL1500_.jpg",
    price: 20,
},
{
    id: 8,
    name: "Saga of Blue-Eyes White Dragon Structure Deck",
    image: "https://i5.walmartimages.com/asr/594f1c9c-67b3-4c6b-8cbc-96c3b4907ee5_1.8ec970d485a0c93718ea2772a72cc9c9.jpeg",
    price: 22,
},
{
    id: 9,
    name: "Realm of Light Structure Deck",
    image: "https://m.media-amazon.com/images/I/81mkj8ba--L._AC_SY741_.jpg",
    price: 18,
},
{
    id: 10,
    name: "Cyber Dragon Revolution Structure Deck",
    image: "https://m.media-amazon.com/images/I/81fEbL-yGAL._AC_SY679_.jpg",
    price: 21,
},
]
    }
  },

  methods: {
    addItem(product){
      this.cart.push(product);
    }
},
}
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.product {
  margin-top: 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.555);
  width: 30%;
  height: 500px;
  transition-duration: all ease 2s;
}

.product:hover {
  transform: scale(1.05);
}

.add_item{
  width: 40%;
  height: 10%;
  background-color: aquamarine;
  font-size: 1rem;
}
img {
  width: 30%;
  height: 50%;
}

header{
  height:100px;
  background-color: sandybrown;
  box-shadow: 2px;
  display: flex;
  justify-content: center;
  font-size: 3rem;
}

</style>
