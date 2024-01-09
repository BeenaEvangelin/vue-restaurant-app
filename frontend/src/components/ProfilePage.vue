<template>
  <div class="profile">
    <div class="title">
      <h1 class="header">NOURISH BISTRO</h1>
      <img class="header-logo" src="../assets/restaurantLogo.png" />
    </div>
    <p class="sub-title">Login as</p>

    <div class="logos">
      <router-link to="/log-in" class="logo-text"
        ><div class="logo">
          <img src="../assets/adminLogo.png" class="logo-img" />
          <p>Admin</p>
        </div></router-link
      >

      <router-link to="/user-log-in" class="logo-text"
        ><div class="logo">
          <img src="../assets/userLogo.png" class="logo-img" />
          <p>User</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfilePage",
};
</script>
<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-title {
  font-size: 20px;
}
.header {
  font-size: 6rem;
}
.header-logo {
  width: 15rem;
  height: 15rem;
}
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  border: 1px solid rgb(255, 255, 255);
  margin: 2rem;
  border-radius: 100%;
  height: 20rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px 1px 15px 2px #000000;
  cursor: pointer;
  text-decoration: none;
}
.logo-img {
  height: 10rem;
  width: 10rem;
}
.logo-text {
  text-decoration: none;
  font-size: 20px;
  color: #474747;
}
</style>
