<template>
  <div class="login-page">
    <div class="welcome-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
      <p v-if="isAuthenticated">User: {{ username }}</p> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isAuthenticated: false 
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, {
          username: this.username,
          password: this.password,
        });

        if (response.data.authenticated) {
          this.errorMessage = '';
          localStorage.setItem('authenticated', 'true');
          localStorage.setItem('username', this.username); 
          this.isAuthenticated = true;
          
          setTimeout(() => {
            localStorage.removeItem('authenticated'); 
            localStorage.removeItem('username'); 
            this.isAuthenticated = false; 
          }, 20000); 

          this.$router.push({ name: 'Login Page Project' });
        }
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message || 'Login failed';
        } else if (error.request) {
          this.errorMessage = 'No response from server';
        } else {
          this.errorMessage = 'Error: ' + error.message;
        }
      }
    }
  },
  mounted() {
    if (localStorage.getItem('authenticated')) {
      const isAuthenticated = localStorage.getItem('authenticated');
      if (isAuthenticated) {
        const now = Date.now();
        const loginTime = localStorage.getItem('loginTime');

        if (!loginTime || now - loginTime > 20000) {
          localStorage.removeItem('authenticated'); 
        } else {
          this.isAuthenticated = true; 
          this.username = localStorage.getItem('username') || '';
        }
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(45deg, #9ba4b5, #1041ac);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.login-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-container {
  background: rgba(0, 0, 0, 0.7);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 300px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background 0.3s;
}

input:focus {
  background: rgba(255, 255, 255, 0.3);
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #1041ac;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0e2e84;
}

.error {
  color: red;
  text-align: center;
}
</style>
