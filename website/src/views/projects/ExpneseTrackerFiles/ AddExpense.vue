<template>
    <div>
      <label for="amount">Enter Expense Amount:</label>
      <input type="number" v-model="amount" id="amount" required placeholder="Enter the amount">
      <button @click="submitExpense" class="submit-btn">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['amount'],
    emits: ['submit'],
    methods: {
      submitExpense() {
        this.$emit('submit');
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add your styles */
  </style>