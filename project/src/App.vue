<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <header>{{cart.length}} Items in Cart
      <button>View Cart</button>
    </header>
    <h1>Products</h1>

  <div class="card">
    <div v-for="product in products" :key="product.name">
      <h2>{{product.name}}</h2>
        <img :src="product.image"/>
        <h3>${{product.price}}</h3>
        <button v-on:click="addItem(product)">Add to Cart</button>
    </div>
  </div>
      
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
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
    img: "https://pm1.narvii.com/6803/d8daeb828ed28fa3a6f73468e30a1b11a728dbbdv2_hq.jpg",
    price: 18,
},
{
    id: 7,
    name: "Gates of the Underworld Structure Deck",
    img: "https://www.yugioh-card.com/en/products/images/mini_SDGU.png",
    price: 20,
},
{
    id: 8,
    name: "Saga of Blue-Eyes White Dragon Structure Deck",
    img: "https://www.yugioh-card.com/en/products/images/SD25_sml.png",
    price: 22,
},
{
    id: 9,
    name: "Realm of Light Structure Deck",
    img: "https://www.yugioh-card.com/en/products/images/SDLI_sml.png",
    price: 18,
},
{
    id: 10,
    name: "Cyber Dragon Revolution Structure Deck",
    img: "https://www.yugioh-card.com/en/products/images/SD26_sml.png",
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
  components: {}
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

img{
width: 20%;
height: 20%;
}
header{
  height:100px;
  background-color: sandybrown;
  box-shadow: 2px;
  display: flex;
  justify-content: center;
  font-size: 3rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
