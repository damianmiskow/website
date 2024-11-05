<template>
  <div class="app">
    <h1>Card Validation</h1>
    <form @submit.prevent="validateCard">
      <label for="card_number">Please Enter Card Number:</label>
      <input type="text" v-model="cardNumber" id="card_number" required>
      <button type="submit">Validate</button>
    </form>
    <p v-if="result !== null" :style="{ color: resultColor }">{{ result }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'CardValProject',
  setup() {
    const cardNumber = ref('');
    const result = ref(null);
    const resultColor = ref('black');

    const validateCard = async () => {
      try {
        console.log('Sending POST request with card number:', cardNumber.value);
        
        // Update the URL to the new IP address
        const response = await axios.post('http://54.226.145.66:5000/validate', {
          card_number: cardNumber.value,
        });

        console.log('Response:', response.data);

        if (response.data.is_valid) {
          result.value = 'The card number is valid!';
          resultColor.value = 'green';
        } else {
          result.value = 'The card number is invalid!';
          resultColor.value = 'red';
        }
      } catch (error) {
        console.error('There was an error validating the card:', error);
        result.value = 'An error occurred. Please try again.';
        resultColor.value = 'red';
      }
    };

    return {
      cardNumber,
      result,
      resultColor,
      validateCard,
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
  color: #fff8f8;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: #ffffff;
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

p {
  margin-top: 20px;
  font-size: 18px;
}
</style>
