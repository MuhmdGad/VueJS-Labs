<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">price</th>
        <th scope="col">quantity</th>
        <th scope="col">+/-</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <th scope="row">{{ product.name }}</th>
        <td><img :src="product.image" width="150" height="150" /></td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <button class="btn btn-primary"     :disabled="product.stock == 0"    @click="increaseQuantity(product.id)"> + </button>
          <button class="btn btn-danger ml-2" :disabled="product.quantity == 1" @click="decreaseQuantity(product.id)"> - </button>
        </td>
        <td>
          <button class="btn btn-danger" @click="removeProduct(product.id)"> Remove </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Cart",
  props: {
    products: Object,
  },
  methods: {
    removeProduct(id) {
      this.$emit("remove-product", id);
    },
    increaseQuantity(id) {
      this.$emit("increase-quantity", id);
    },
    decreaseQuantity(id) {
      this.$emit("decrease-quantity", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
