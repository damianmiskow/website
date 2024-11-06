<template>
    <div>
      <h1>API Number Addition</h1>

      <div>
        <input v-model="num1" type="number" placeholder="Enter first number" />
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

          const requestData = `{"num1": ${this.num1}, "num2": ${this.num2}}`;
          const response = await axios.post(
            'https://z0ulxi5dc1.execute-api.us-east-1.amazonaws.com/TestStage/lambdatest1',
            requestData,
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: false 
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
  