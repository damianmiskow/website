<template>
  <div>
    <h1>API Calculator</h1>

    <div>
      <input v-model="num1" type="number" placeholder="Enter first number" />
      <input v-model="op" placeholder="Enter operator" />
      <input v-model="num2" type="number" placeholder="Enter second number" />

      <button @click="sendNumbers">Send Numbers</button>
    </div>
    
    <div v-if="result !== null">
      <h2>Result: {{ result }}</h2>
    </div>

    <div v-if="error">
      <h2 style="color: red;">Error: {{ error }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      op: null,
      num1: null,
      num2: null,
      result: null,
      error: null
    };
  },
  methods: {
    async sendNumbers() {
      try {
        this.error = null;

        const requestData = { op: this.op, num1: this.num1, num2: this.num2 };
        const apiUrl = process.env.VUE_APP_API_URL;  
        const apiKey = process.env.VUE_APP_API_KEY;  

        const response = await axios.post(
          apiUrl,  
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey  
            }
          }
        );

        this.result = response.data.result; 
      } catch (err) {
        this.error = err.response ? err.response.data.message : err.message;
        this.result = null;
      }
    }
  }
};
</script>

<style scoped>
input {
  margin: 5px;
  padding: 8px;
  width: 150px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
}

h2 {
  margin-top: 20px;
}
</style>
