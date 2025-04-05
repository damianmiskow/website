<template>
    <div class="app">
      <h1>Address Tracker</h1>
      <form @submit.prevent="addAddress">
        <label for="address">Please Enter Address:</label>
        <input type="text" v-model="address" id="address" required placeholder="e.g., 123 Main St, Springfield, IL 62704">
        <button type="submit">Add Address</button>
      </form>
      <p v-if="result !== null" :style="{ color: resultColor }" class="response-box">
        {{ result }}
      </p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; 
  import axios from 'axios';
  
  export default {
    name: 'AddressTracker',
    setup() {
      const address = ref('');
      const result = ref(null);
      const resultColor = ref('black');
  
      const addAddress = async () => {
        if (!address.value) {
          result.value = 'Please enter an address.';
          resultColor.value = 'red';
          return;
        }
  
        try {
          console.log('Sending POST request with address:', address.value);
  
          const apiUrl = 'https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/expense_tracker';
  
          const response = await axios.post(apiUrl, {
            address: address.value,  // Send the address
          });
  
          console.log('Response:', response.data);
  
          // Check for a successful response
          if (response.status === 200) {
            result.value = `Address "${address.value}" added successfully!`;
            resultColor.value = 'green';
          } else {
            result.value = 'Failed to add the address.';
            resultColor.value = 'red';
          }
        } catch (error) {
          console.error('There was an error adding the address:', error);
          result.value = 'An error occurred. Please try again.';
          resultColor.value = 'red';
        }
      };
  
      return {
        address,
        result,
        resultColor,
        addAddress,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .app {
    text-align: center;
    padding-top: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
    color: white;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: white; 
  }
  
  input[type="text"] {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  button:active {
    background-color: #004080;
    transform: scale(1);
  }
  
  .response-box {
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.7); 
    color: white;
    width: 80%; 
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  }
  </style>