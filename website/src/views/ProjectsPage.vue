<template>
  <div class="projects">
    <h1>Projects Page</h1>
    <div class="buttons-container">
      <router-link
        v-for="project in projects"
        :key="project.name"
        :to="project.route"
        class="project-button"
      >
        <div class="project-content">
          <div class="project-name">{{ project.name }}</div>
          <div class="project-description">{{ project.description }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        { name: 'Credit Card Validation', route: '/projects/cardvalidationproject', description: 'Validate credit card numbers' },
        { name: 'Login Page', route: '/projects/loginpageproject', description: 'Log-in to see the page' },
        { name: 'Project 3', route: '#', description: 'Description for Project 3' }, 
        { name: 'Project 4', route: '#', description: 'Description for Project 4' }, 
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 40px; 
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; 
}

.project-button {
  background-color: #838b90;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  width: 300px;
  height: 150px; 
}

.project-button:hover {
  background-color: #4682b4;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.project-button:active {
  background-color: #4169e1;
  transform: scale(1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.project-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.project-description {
  font-size: 16px;
  color: #ddd;
}
</style>
