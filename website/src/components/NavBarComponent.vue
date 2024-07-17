<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
};
</script>

<style>
.navbar {
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  display: flex;
  justify-content: center;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}
</style>
