<template>
  <div>
    <UserNav />
    <div class="home">
      <div class="container">
        <div class="header">
          <h1 class="title">Hi, {{ name }}. Welcome to Nourish Bristo</h1>
          <img class="logo" src="../../assets/restaurantLogo.png" />
        </div>
        <div class="section">
          <div class="subtitle">Best food for your taste</div>
          <div class="desciption">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </div>
          <div class="btns">
            <router-link to="/user-bookings">
              <button class="btn-primary">Book A Table</button></router-link
            ><router-link to="/user-menu">
              <button class="btn-secondary">Explore Menu</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <MoreAbout />
    <AllServices />
    <FoodDelivery />
    <CustomerReviews />
  </div>
</template>

<script>
import UserNav from "./UserNav.vue";
import MoreAbout from "./HomeComponents/MoreAbout.vue";
import AllServices from "./HomeComponents/AllServices.vue";
import CustomerReviews from "./HomeComponents/CustomerReviews.vue";
import FoodDelivery from "./HomeComponents/FoodDelivery.vue";
export default {
  name: "UserHome",
  components: {
    UserNav,
    MoreAbout,
    AllServices,
    FoodDelivery,
    CustomerReviews,
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
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 729px;
  flex-shrink: 0;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 4rem;
  color: #232627;
}
.section {
  height: 400px;
  width: 667px;
}
.subtitle {
  color: var(--Neutral-07, #2c2f24);
  text-align: center;

  font-family: Playfair Display;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: 96px;
}
.desciption {
  color: var(--Neutral-07, #2c2f24);
  text-align: center;
  width: 537px;
  height: 64px;
  margin-left: 4rem;
  margin-top: 32px;

  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 32px;
}
.btn-primary {
  border-radius: 118px;
  height: 4rem;
  width: 10rem;
  background: #ad343e;
  border: 1px solid #ad343e;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.btn-secondary {
  height: 4rem;
  width: 10rem;
  font-size: 20px;
  border-radius: 118px;
  border: 1px solid #2c2f24;
  cursor: pointer;
}
.logo {
  width: 150px;
  height: 150px;
}
</style>
