import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/views/Home.vue';
import People from '@/components/views/People.vue';
import PeopleDetail from '@/components/views/PeopleDetail.vue';
import Planets from '@/components/views/Planets.vue';
import PlanetDetail from '@/components/views/PlanetDetail.vue';
import Starships from '@/components/views/Starships.vue';
import StarshipDetail from '@/components/views/StarshipDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/people/:id',
    name: 'PeopleDetail',
    component: PeopleDetail,
    props: true,
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
  },
  {
    path: '/starship/:id',
    name: 'StarshipDetail',
    component: StarshipDetail,
    props: true,
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
  },
  {
    path: '/planet/:id',
    name: 'PlanetDetail',
    component: PlanetDetail,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
