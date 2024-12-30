<template>
  <div class="home">
    <AppNavbar />
    <div class="container">
      <AppHero />

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/Navbar.vue'
import AppHero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    AppNavbar,// Pastikan namanya sesuai dengan yang didefinisikan di Navbar.vue
    AppHero,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProducts(data) {
      this.products = data
    }
  },
  mounted() {
    axios.get('http://localhost:3000/best-products')
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => {
        console.log("Gagal :", error);
      });
  }
};
</script>