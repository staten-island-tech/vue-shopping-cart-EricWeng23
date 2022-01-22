<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>Products<h1>
      <div v-for="product in products" :key="product.name">{{product.name}}
        <img :src="product.image"/>
        <button>Add to Cart</button>
      <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      products: [
{
    id: 1,
    name: "HERO Strike Structure Deck",
    image: "https://www.yugioh-card.com/en/products/images/SDHS_sml.png",
    price: 18,
},
{
    id: 2,
    name: "Synchron Extreme Structure Deck",
    image: "https://www.yugioh-card.com/en/products/images/SD28_sml.png",
    price: 23,
},
{
    id: 3,
    name: "Structure Deck: Albaz Strike",
    image: "https://www.yugioh-card.com/en/products/images/SDAZ_sml.png",
    price: 20,
},
{
    id: 4,
    name: "Structure Deck: Freezing Chains",
    image: "https://www.yugioh-card.com/en/products/images/SDFC_sml.png",
    price: 19,
},
{
    id: 5,
    name: "Structure Deck: Order of the Spellcasters",
    image: "https://www.yugioh-card.com/en/products/images/SR08_sml.png",
    price: 17,
},
{
    id: 6,
    name: "Structure Deck: Soulburner",
    img: "https://www.yugioh-card.com/en/products/images/SDSB_sml.png",
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
  components: {}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
