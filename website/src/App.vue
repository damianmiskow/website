<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(45deg, #b6bfd1, #0639a7);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome-container {
  background: rgba(0, 0, 0, 0.5);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-top: 10vh;
}

h1 {
  font-size: 3em;
  margin: 0;
}
</style>
