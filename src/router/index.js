import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login.vue"),
  },
  {
    path: "/profile",
    name: "UserProfile",
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../components/UserProfile.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("isLoggedIn") !== null) {
    if (to.path == "/profile") {
      next();
    } else if (to.path == "/" || to.path == "/#" || to.path == "/login") {
      next("/profile");
    } else {
      next(false);
    }
  } else {
    if (to.path == "/profile") {
      next(false);
    } else {
      next();
    }
  }
});
export default router;
