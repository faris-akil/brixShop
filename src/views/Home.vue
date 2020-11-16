<template>
  <div class="home">
    <Header />
    <PopularProduct />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/home/Header"
import PopularProduct from "@/components/home/PopularProducts"
import Footer from "@/components/home/Footer"

export default {
  name: "Home",
  components: {
    Header,
    PopularProduct,
    Footer
  }
};
</script>
