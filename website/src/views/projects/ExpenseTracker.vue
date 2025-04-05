<template>
    <div class="app">
      <div class="left-side">
        <h1 class="title">Address Tracker</h1>
        
        <!-- Dropdown menu to select an address -->
        <label for="address">Select Address:</label>
        <select v-model="selectedAddress" id="address" required class="select-address">
          <option v-for="address in addresses" :key="address" :value="address">{{ address }}</option>
        </select>
  
        <!-- Button to open the form to add a new address -->
        <button @click="openAddAddressForm" class="add-address-btn">+ Add New Address</button>
  
        <!-- New address form (hidden by default) -->
        <div v-if="showAddAddressForm" class="add-address-form">
          <h3>Add New Address</h3>
          <form @submit.prevent="addAddress">
            <label for="new-address">Enter New Address:</label>
            <input type="text" v-model="newAddress" id="new-address" required placeholder="e.g., 123 Main St, Springfield, IL 62704">
            <button type="submit" class="submit-btn">Add Address</button>
          </form>
        </div>
  
        <p v-if="result !== null" :style="{ color: resultColor }" class="response-box">
          {{ result }}
        </p>
      </div>
  
      <div class="right-side">
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
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; 
  import axios from 'axios';
  
  export default {
    name: 'AddressTracker',
    setup() {
      const addresses = ref([]);
      const selectedAddress = ref('');
      const newAddress = ref('');
      const result = ref(null);
      const resultColor = ref('black');
      const showAddAddressForm = ref(false);
  
      // Fetch all addresses from the new API endpoint
      const fetchAddresses = async () => {
        try {
          const apiUrl = 'https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/expense_tracker/access-db'; // Updated endpoint
          const response = await axios.get(apiUrl);
          
          // Parse the response body and extract the addresses
          const body = JSON.parse(response.data.body);
          addresses.value = body.addresses || [];
          
          if (addresses.value.length > 0) {
            selectedAddress.value = addresses.value[0];  // Set default selection to the first address
          }
        } catch (error) {
          console.error('Error fetching addresses:', error);
          result.value = 'An error occurred while fetching addresses.';
          resultColor.value = 'red';
        }
      };
  
      // Handle adding a new address
      const addAddress = async () => {
        if (!newAddress.value) {
          result.value = 'Please enter an address.';
          resultColor.value = 'red';
          return;
        }
  
        try {
          const apiUrl = 'https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/expense_tracker'; // Replace with your POST endpoint
          const response = await axios.post(apiUrl, {
            address: newAddress.value,
          });
  
          console.log('Address added:', response.data);
  
          // Re-fetch addresses after adding a new one
          fetchAddresses();
  
          newAddress.value = ''; // Clear input after submitting
          showAddAddressForm.value = false; // Close the form
          result.value = `Address "${newAddress.value}" added successfully!`;
          resultColor.value = 'green';
        } catch (error) {
          console.error('Error adding address:', error);
          result.value = 'An error occurred while adding the address.';
          resultColor.value = 'red';
        }
      };
  
      // Show or hide the form to add a new address
      const openAddAddressForm = () => {
        showAddAddressForm.value = !showAddAddressForm.value;
      };
  
      // Placeholder for future functionality when clicking an address link
      const handleAddressClick = (address) => {
        console.log('Clicked address:', address);
        // Future functionality goes here, for now, it just logs the clicked address
      };
  
      // Initial fetch of addresses when the component is mounted
      fetchAddresses();
  
      return {
        addresses,
        selectedAddress,
        newAddress,
        result,
        resultColor,
        showAddAddressForm,
        fetchAddresses,
        addAddress,
        openAddAddressForm,
        handleAddressClick,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Global styles */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
  }
  
  .app {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 40px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .left-side, .right-side {
    width: 48%;
    padding: 20px;
  }
  
  h1, h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
    font-weight: 600;
  }
  
  .subtitle {
    margin-bottom: 15px;
    font-size: 22px;
    color: #555;
  }
  
  label {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
    display: block;
  }
  
  select, input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  
  button, .submit-btn, .add-address-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  button:hover, .submit-btn:hover, .add-address-btn:hover {
    background-color: #0056b3;
  }
  
  button:active, .submit-btn:active, .add-address-btn:active {
    background-color: #004080;
  }
  
  .add-address-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .response-box {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 100%;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .address-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .address-table th, .address-table td {
    text-align: left;
    padding: 15px;
    font-size: 16px;
  }
  
  .address-table th {
    background-color: #007bff;
    color: white;
  }
  
  .address-table td {
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
  }
  
  .address-table td a {
    color: #007bff;
    text-decoration: none;
  }
  
  .address-table td a:hover {
    text-decoration: underline;
  }
  
  .add-address-btn {
    background-color: #28a745;
    margin-top: 20px;
    cursor: pointer;
  }
  
  .add-address-btn:hover {
    background-color: #218838;
  }
  </style>