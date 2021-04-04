<template>
  <header class="bg-dark d-flex py-3 px-5 justify-content-between">
    <button class="btn text-light" @click="showProducts">Products</button>
    <div class="cart__part">
      <p class="d-inline text-light">
        {{ itemsNumber }} items in your cart with {{ totalPrice }} $ Total Price
      </p>
      <button class="btn btn-primary ml-3" @click="showCart">Show Cart</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    itemsNumber: Number,
    totalPrice: Number,
  },
  methods: {
    showCart() {
      this.$emit("show-cart");
    },
    showProducts() {
      this.$emit("show-products");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
