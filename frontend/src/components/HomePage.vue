<template>
  <div>
    <HeaderComponent />

    <div class="header">
      <h1>Hi, {{ name }}. Welcome to Nourish Bristo</h1>
      <img class="logo" src="../assets/restaurantLogo.png" />
    </div>
    <div class="container">
      <div class="allMeals">
        <div v-for="meal in allMeals" :key="meal.id" class="mealItem">
          <div class="mealItem-img">
            <img :src="meal.imageUrl" class="mealItem-img" alt="Meal Image" />
          </div>
          <div class="mealItem-name">{{ meal.itemName }}</div>
          <div class="mealItem-amount">{{ meal.amount }}</div>
          <div class="btns">
            <router-link :to="`/update-item/${meal.id}`">
              <button class="mealItem-update">Update</button></router-link
            >
            <button @click="deleteMeal(meal.id)" class="mealItem-delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      name: "",
      allMeals: [],
    };
  },

  methods: {
    async deleteMeal(id) {
      let result = await axios.delete("http://localhost:3000/menuItems/" + id);

      if (result.status == 200) {
        this.loadData();
      }
    },

    async loadData() {
      let admin = localStorage.getItem("admin-data");

      if (!admin) {
        this.$router.push({ name: "PofilePage" });
      } else {
        this.name = JSON.parse(admin).username;
      }

      let result = await axios.get("http://localhost:3000/menuItems");
      // console.log(result);
      this.allMeals = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #474747;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.allMeals {
  /* background-color: rgb(3, 99, 70); */
  /* background-color: #474747; */
  /* background-color: #151d25; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 80%;
  height: 100%;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-bottom: 3rem;
}
.mealItem {
  border: 1px solid #dbdfd0;
  margin: 25px;
  /* width: 22%;
  height: 100%; */
  width: 306px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: rgb(46, 46, 42); */
  background-color: #ffffff;
}
.mealItem:hover {
  box-shadow: -1px 0px 15px 1px rgb(151, 140, 140);

  transition-duration: 0.5s;
}
.mealItem-name {
  /* color: rgb(255, 255, 197); */
  color: #474747;
  font-size: 20px;
  padding-top: 1rem;
}
.mealItem-amount {
  /* color: rgb(255, 255, 197); */
  color: #ad343e;
  width: 306px;
  height: 428px;
  font-size: 18px;
  padding: 5px;
}
.mealItem-img {
  /* height: 15rem;
  width: 22rem; */
  height: 230px;
  width: 306px;
  border-radius: 10px 10px 0px 0px;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}
.mealItem-update {
  height: 3rem;
  width: 8rem;
  border-radius: 10px;
  border: none;
  margin: 10px;
  background-color: #ad343e;
  /* background-color: rgb(255, 137, 3); */
  font-size: 18px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.mealItem-delete {
  height: 3rem;
  width: 8rem;
  border-radius: 10px;
  border: 1px solid #ad343e;
  margin: 10px;
  /* background-color: rgb(238, 238, 177); */
  /* background-color: rgb(253, 250, 216); */
  color: #ad343e;
  background-color: #ffffff;
  /* background-color: rgb(253, 250, 216); */
  font-size: 18px;
  cursor: pointer;
  /* color: rgb(255, 137, 3); */
}
.logo {
  width: 150px;
  height: 150px;
}
</style>
