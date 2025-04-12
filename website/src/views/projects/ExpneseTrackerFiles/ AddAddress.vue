<template>
    <div v-if="showAddAddressForm" class="add-address-form">
      <h3>Add New Address</h3>
      <form @submit.prevent="submitAddress">
        <label for="new-address">Enter New Address:</label>
        <input type="text" v-model="newAddress" id="new-address" required placeholder="e.g., 123 Main St, Springfield, IL 62704">
        <button type="submit" class="submit-btn">Add Address</button>
      </form>
    </div>
    <button @click="toggleForm" class="add-address-btn">+ Add New Address</button>
  </template>
  
  <script>
  export default {
    props: ['showAddAddressForm'],
    emits: ['add-address', 'toggle-form'],
    data() {
      return {
        newAddress: '',
      };
    },
    methods: {
      submitAddress() {
        this.$emit('add-address', this.newAddress);
        this.newAddress = '';
      },
      toggleForm() {
        this.$emit('toggle-form');
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add your styles */
  </style>