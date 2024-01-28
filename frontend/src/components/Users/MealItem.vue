<template>
  <div>
    <UserNav />
    <h1>This Meal</h1>
    <div class="container">
      <div class="allMeals">
        <div class="mealItem">
          <!-- <div v-for="meal in allMeals" :key="meal.id" class="mealItem"> -->
          <div class="mealItem-img">
            <img :src="meal.imageUrl" class="mealItem-img" alt="Meal Image" />
          </div>
          <div class="mealItem-name">{{ meal.itemName }}</div>
          <div class="mealItem-amount">{{ meal.amount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserNav from "./UserNav.vue";

export default {
  name: "MealItem",
  components: {
    UserNav,
  },
  data() {
    return {
      meal: {
        imageUrl: null,
        itemName: "",
        amount: "",
      },
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/menuItems/" + this.$route.params.id
    );
    this.meal = result.data;
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
