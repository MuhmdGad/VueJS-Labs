<template>
  <Header
    :itemsNumber="itemsNumber"
    :totalPrice="totalPrice"
    @showCart="showCartFunc"
    @showProducts="showProductsFunc"
  />

  <div v-if="!showCart" class="container d-flex flex-wrap text-center justify-content-center">
    <Product
      class="product m-3"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>

  <div class="container" v-if="showCart">
    <Cart
      v-if="cartProducts.length > 0"
      :products="cartProducts"
      @remove-product="removeProduct"
      @increase-quantity="increaseQuantity"
      @decrease-quantity="decreaseQuantity"
    />
    <p v-else class="text-danger text-center m-5">Sorry, your Cart is Empty</p>
  </div>

  
  <Footer />
</template>

<script>
import Header from "./components/Header";
import products from "./products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Product,
    Cart,
    Footer,
  },
  data: () => ({
    products,
    showCart: false,
    cartProducts: [],
    totalPrice: 0,
    itemsNumber: 0,
  }),
  methods: {
    showCartFunc() {
      this.showCart = true;
    },
    showProductsFunc() {
      this.showCart = false;
    },
    addToCart(ProductObject) {
      let productExists = false;
      this.cartProducts.forEach((product) => {
        if (ProductObject.id === product.id) {
          product.quantity++;
          product.stock--;
          productExists = true;
        }
      });
      if (!productExists) {
        ProductObject.quantity = 1;
        ProductObject.stock--;
        this.cartProducts.push(ProductObject);
      }
      this.calculateTotalPrice();
      this.calculateNumberOfItems();
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      this.cartProducts.forEach((product) => {
        totalPrice += product.quantity * product.price;
      });
      this.totalPrice = totalPrice;
    },
    calculateNumberOfItems() {
      let itemsNumber = 0;
      this.cartProducts.forEach((product) => {
        itemsNumber += product.quantity;
      });
      this.itemsNumber = itemsNumber;
    },
    removeProduct(id) {
      this.cartProducts = this.cartProducts.filter(
        (product) => product.id !== id
      );
    },
    increaseQuantity(id) {
      this.cartProducts.forEach((product) => {
        if (product.id === id) {
          product.quantity++;
          product.stock--;
        }
      });
      this.calculateTotalPrice();
      this.calculateNumberOfItems();
    },
    decreaseQuantity(id) {
      this.cartProducts.forEach((product) => {
        if (product.id === id) {
          product.quantity--;
          product.stock++;
        }
      });
      this.calculateTotalPrice();
      this.calculateNumberOfItems();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
