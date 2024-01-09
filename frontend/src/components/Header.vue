<template>
  <div class="nav">
    <div>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/add-item" class="nav-item">Add Item</router-link>
      <router-link to="/blog-page" class="nav-item">Blogs</router-link>
      <router-link to="/message-page" class="nav-item">Messages</router-link>
      <router-link to="/booking-page" class="nav-item">Bookings</router-link>
    </div>
    <button @click="logout" class="nav-logout">Logout</button>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "ProfilePage" });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.nav {
  height: 5rem;
  /* background-color: #151d25; */
  /* background-color: rgb(15, 110, 81); */
  background: #474747;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0rem 2rem;
}

.nav-item {
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  color: rgb(253, 250, 216);
}

.nav-logout {
  height: 3rem;
  width: 6rem;
  border-radius: 40px;
  border: 1px solid #474747;
  color: #474747;
  background-color: rgb(253, 250, 216);
  cursor: pointer;
  font-size: 17px;
}
.nav-logout:hover {
  background: #ad343e;
  border: 1px solid #ad343e;
  color: rgb(253, 250, 216);
}
</style>
