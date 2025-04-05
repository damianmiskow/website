<template>
  <div class="projects">
    <h1>Projects Page</h1>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Search projects..." 
      class="search-bar"
    />
    <div class="buttons-container">
      <router-link
        v-for="project in filteredProjects"
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
      searchQuery: '',
      projects: [
        { name: 'Credit Card Validation', route: '/projects/cardvalidationproject', description: 'Validate credit card numbers' },
        { name: 'Login Page', route: '/projects/loginpageproject', description: 'Log-in to see the page' },
        { name: 'Calculator AWS', route: '/projects/awslambda', description: 'Simple calculator meant to test AWS API and Lambda functionsI' }, 
        { name: 'Project 4', route: '#', description: ' ' }, 
      ],
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => 
        project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px; 
}

.search-bar {
  margin-bottom: 40px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; 
}

.project-button {
  background-color: rgb(193, 192, 192);
  border: 2px solid black; 
  border-radius: 12px;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s, color 0.3s;
  width: 300px;
  height: 150px; 
}

.project-button:hover {
  background-color: #165487; 
  color: white; 
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
  color: #555; 
}
</style>
