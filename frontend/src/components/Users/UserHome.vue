<template>
  <div>
    <UserNav />
    <div class="home">
      <div class="header">
        <h1>Hi, {{ name }}. Welcome to Nourish Bristo</h1>
        <img class="logo" src="../../assets/restaurantLogo.png" />
      </div>
    </div>
  </div>
</template>

<script>
import UserNav from "./UserNav.vue";
export default {
  name: "UserHome",
  components: {
    UserNav,
  },

  data() {
    return {
      name: "",
    };
  },
  methods: {
    async loadData() {
      let user = localStorage.getItem("user-data");

      if (!user) {
        this.$router.push({ name: "ProfilePage" });
      } else {
        this.name = JSON.parse(user).username;
      }

      //   let result = await axios.get("http://localhost:3000/menuItems");
      //   // console.log(result);
      //   this.allMeals = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #474747;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 150px;
  height: 150px;
}
</style>
