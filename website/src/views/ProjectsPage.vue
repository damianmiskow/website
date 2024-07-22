<template>
  <div class="contact">
    <h1>Projects Page</h1>
    <p>Welcome to the Project page.</p>
    <form @submit.prevent="validateCard">
      <label for="card_number">Please Enter Card Number:</label>
      <input type="text" v-model="cardNumber" id="card_number" required>
      <button type="submit">Validate</button>
    </form>
    <p v-if="result !== null">{{ result }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactPage',
  data() {
    return {
      cardNumber: '',
      result: null,
    };
  },
  methods: {
    async validateCard() {
      try {
        console.log('Sending POST request with card number:', this.cardNumber); 
        const response = await axios.post('http://127.0.0.1:5000/validate', {
          card_number: this.cardNumber,
        });
        console.log('Response:', response); 
        if (response.data.is_valid) {
          this.result = 'The card number is valid!';
        } else {
          this.result = 'The card number is invalid!';
        }
      } catch (error) {
        console.error('There was an error validating the card:', error);
        this.result = 'An error occurred. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 20px;
}
</style>
