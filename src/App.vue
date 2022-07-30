<template>
  <div id="app">
    <Header></Header> 
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";
import Footer from "./components/Footer.vue"
import Hotelroute from "./components/HotelRoute.vue";
import PostRoute from "./components/PostRoute.vue";

export default{
  components:{
    Header,
    Container,
    Footer,
    Hotelroute,
    PostRoute
}
}
</script>
<style>

</style>
|