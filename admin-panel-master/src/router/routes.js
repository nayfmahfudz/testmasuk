const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Guest.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue')
  },
  { 
    path: '/admin', 
    component: () =>import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'homeAdmin',
        alias: 'homeAdmin',
        name: 'homeAdmin',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'guest',
        name: 'guest',
        component: () => import('@/pages/Guest.vue')
      },
      {
        path: 'artikel',
        name: 'artikel',
        component: () => import('@/pages/developments/Form/index.vue')
      },
      {
        path: 'artikel/:id',
        component: () => import('@/pages/developments/Form/index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/developments/tables/Index.vue')
      },
    ]
  },
  
]
export default routes