<template>
  <div class="card" style="width: 18rem;">   
    <img :src="product.image" :alt="product.name" >
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text"> {{ product.decription }}</p>
      <p>Price : {{ product.price }} $</p>
      <p>Stock : {{ product.stock }}</p>
      <button  class="btn btn-primary" :disabled="product.stock == 0"  @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  product: "Product",
  props: {
    product: Object,
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
