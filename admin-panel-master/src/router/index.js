import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to, from, next) => {
  let isAuth = false
  if (localStorage.user) {
    isAuth = true
  }
  if (isAuth==true) {
  


  // mengecek ada tidak  auth di dalam 
  if (to.name !== "login" ) {
        next();
      } else {
        next("/admin")
      }
} else {
  if (to.name === "login" ) {
    next();
  } else {
    next("/login")
  }
}
});
export default router