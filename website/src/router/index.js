import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import CardValProject from '../views/projects/CardValProject.vue';
import LoginPageProject from '../views/projects/LoginPageProject.vue';
import LoginPage from '../views/LoginPage.vue';  // Import the login page

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
  { path: '/projects/cardvalidationproject', name: 'Card Validation Project', component: CardValProject },
  { path: '/projects/loginpageproject', name: 'Login Page Project', component: LoginPageProject, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });  // Redirect to login if not authenticated
  } else {
    next();  // Proceed if authenticated or route doesn't require auth
  }
});

export default router;
