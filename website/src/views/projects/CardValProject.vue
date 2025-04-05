<template>
  <div class="app">
    <h1>Card Validation</h1>
    <form @submit.prevent="validateCard">
      <label for="card_number">Please Enter Card Number:</label>
      <input type="text" v-model="cardNumber" id="card_number" required>
      <button type="submit">Validate</button>
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
  name: 'CardValProject',
  setup() {
    const cardNumber = ref('');
    const result = ref(null);
    const resultColor = ref('black');

    const validateCard = async () => {
      if (!cardNumber.value) {
        result.value = 'Please enter a card number.';
        resultColor.value = 'red';
        return;
      }

      const cardNumberInt = parseInt(cardNumber.value, 10);

      if (isNaN(cardNumberInt)) {
        result.value = 'Invalid card number format.';
        resultColor.value = 'red';
        return;
      }

      try {
        console.log('Sending POST request with card number:', cardNumberInt);

        const apiUrl = 'https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/cardvali';

        const response = await axios.post(apiUrl, {
          card_num: cardNumberInt,
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
