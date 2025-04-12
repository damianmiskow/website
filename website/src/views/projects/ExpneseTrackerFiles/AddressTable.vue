<template>
    <div>
      <h2 class="subtitle">Addresses List</h2>
      <table class="address-table">
        <thead>
          <tr>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in addresses" :key="address">
            <td><a href="#" @click.prevent="handleAddressClick(address)" class="address-link">{{ address }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['addresses'],
    emits: ['address-click'],
    methods: {
      handleAddressClick(address) {
        this.$emit('address-click', address);
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add your styles */
  </style>