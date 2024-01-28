<template>
  <div class="nav">
    <div>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/user-about" class="nav-item">About</router-link>
      <router-link to="/user-menu" class="nav-item">Menu</router-link>
      <router-link to="/user-pages" class="nav-item">Pages</router-link>
      <router-link to="/user-contact" class="nav-item">Contact</router-link>
      <router-link to="/user-bookings">
        <button class="nav-booking">Book a Table</button></router-link
      >
    </div>
    <button @click="logout" class="nav-cart">Cart</button>
    <button @click="logout" class="nav-logout">Logout</button>
  </div>
</template>
<script>
export default {
  name: "UserNav",

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "ProfilePage" });
    },
  },
};
</script>

<style scoped>
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
.nav-cart {
  height: 3rem;
  width: 6rem;
  border-radius: 40px;
  border: 1px solid #ad343e;
  color: #474747;
  background-color: #ad343e;
  cursor: pointer;
  font-size: 18px;
  margin-left: 60rem;
  color: white;
}
.nav-logout:hover {
  background: #ad343e;
  border: 1px solid #ad343e;
  color: rgb(253, 250, 216);
}
.nav-booking {
  height: 3rem;
  width: 8rem;
  border-radius: 40px;
  background: #ad343e;
  border: 1px solid #ad343e;
  color: rgb(253, 250, 216);
  font-size: 18px;
}
</style>
