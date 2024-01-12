import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage";
import SignUp from "../components/SignUp.vue";
import LogIn from "../components/Login.vue";
import AddItem from "../components/AddItem.vue";
import UpdateItem from "../components/UpdateItem.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import ProfilePage from "../components/ProfilePage.vue";
import UserLogIn from "../components/Users/UserLogIn.vue";
import UserSignUp from "../components/Users/UserSignUp.vue";
import AllBlogs from "../components/AllBlogs.vue";
import MessagePage from "../components/CustomerMessage.vue";
import BookingPage from "../components/RecentBookings.vue";
import AddBlog from "../components/AddBlog.vue";
import UpdateBlog from "../components/UpdateBlog.vue";
import UserHome from "../components/Users/UserHome.vue";
import UserAbout from "../components/Users/UserAbout.vue";
import UserMenu from "../components/Users/UserMenu.vue";
import UserPages from "../components/Users/UserPages.vue";
import UserContact from "../components/Users/UserContact.vue";
import UserBookings from "../components/Users/UserBookings.vue";
import AllMessages from "../components/Users/AllMessages.vue";
import AllBookings from "../components/Users/AllBookings.vue";

const routes = [
  {
    path: "/",
    name: "UserHome",
    component: UserHome,
  },

  {
    path: "/admin",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/profile-page",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/user-log-in",
    name: "UserLogIn",
    component: UserLogIn,
  },
  {
    path: "/user-sign-up",
    name: "UserSignUp",
    component: UserSignUp,
  },

  {
    path: "/user-about",
    name: "UserAbout",
    component: UserAbout,
  },
  {
    path: "/user-menu",
    name: "UserMenu",
    component: UserMenu,
  },
  {
    path: "/user-pages",
    name: "UserPages",
    component: UserPages,
  },
  {
    path: "/user-contact",
    name: "UserContact",
    component: UserContact,
  },
  {
    path: "/user-bookings",
    name: "UserBookings",
    component: UserBookings,
  },
  {
    path: "/user-all-messages",
    name: "AllMessages",
    component: AllMessages,
  },
  {
    path: "/user-all-bookings",
    name: "AllBookings",
    component: AllBookings,
  },

  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/add-item",
    name: "AddItem",
    component: AddItem,
  },

  {
    path: "/update-item/:id",
    name: "UpdateItem",
    component: UpdateItem,
  },
  {
    path: "/update-blog/:id",
    name: "UpdateBlog",
    component: UpdateBlog,
  },
  {
    path: "/blog-page",
    name: "AllBlogs",
    component: AllBlogs,
  },
  {
    path: "/add-blogs",
    name: "AddBlog",
    component: AddBlog,
  },
  {
    path: "/message-page",
    name: "MessagePage",
    component: MessagePage,
  },

  {
    path: "/booking-page",
    name: "BookingPage",
    component: BookingPage,
  },

  {
    path: "/:notFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
