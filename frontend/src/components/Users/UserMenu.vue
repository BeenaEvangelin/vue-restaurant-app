<template>
  <div>
    <UserNav />
    <h1>Our Menu</h1>
    <p>
      We consider all the drivers of change gives you the components you need to
      change to create a truly happens.
    </p>
    <div class="container">
      <div class="allMeals">
        <div v-for="meal in allMeals" :key="meal.id" class="mealItem">
          <div class="mealItem-img">
            <img :src="meal.imageUrl" class="mealItem-img" alt="Meal Image" />
          </div>
          <div class="mealItem-name">{{ meal.itemName }}</div>
          <div class="mealItem-amount">{{ meal.amount }}</div>
          <router-link :to="`/user-menu/${meal.id}`">
            <button class="mealItem-update">View Meal</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserNav from "./UserNav.vue";

export default {
  name: "UserMenu",
  components: {
    UserNav,
  },
  data() {
    return {
      name: "",
      allMeals: [],
    };
  },
  methods: {
    async loadData() {
      let result = await axios.get("http://localhost:3000/menuItems");
      // console.log(result);
      this.allMeals = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.allMeals {
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
  width: 306px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}
.mealItem:hover {
  box-shadow: -1px 0px 15px 1px rgb(151, 140, 140);
  transition-duration: 0.5s;
}
.mealItem-name {
  color: #474747;
  font-size: 20px;
  padding-top: 1rem;
}
.mealItem-amount {
  color: #ad343e;
  width: 306px;
  height: 428px;
  font-size: 18px;
  padding: 5px;
}
.mealItem-img {
  height: 230px;
  width: 306px;
  border-radius: 10px 10px 0px 0px;
}

.mealItem-update {
  height: 3rem;
  width: 8rem;
  border-radius: 10px;
  border: none;
  margin: 10px;
  background-color: #ad343e;
  font-size: 18px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
</style>
