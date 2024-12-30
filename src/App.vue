<template>
  <div id="app">
    <!-- <AppNavbar /> -->
    <router-view></router-view> <!-- This is where the routed components will show -->
    <AppFooter />
  </div>
</template>

<script>
//import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue';
import './assets/main.css' // Pastikan ini mengarah ke file CSS yang benar


export default {
  name: 'App',
  components: {
    //AppNavbar,
    AppFooter,
  }
}
</script>

<style>
/* Add your global styles here */
</style>
