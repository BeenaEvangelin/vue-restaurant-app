<template>
  <div>
    <UserNav />

    <div class="container">
      <h1>Your Bookings</h1>
      <div class="all-blogs">
        <div v-for="booking in bookings" :key="booking.id" class="blog">
          <div class="blog-message">
            Thank You! Your dine in is booked for {{ booking.person }} members
          </div>
          <div class="blog-date">Date: {{ booking.date }}</div>
          <div class="blog-date">At: {{ booking.time }}</div>
          <div class="blog-phone">Your Contact: {{ booking.phone }}</div>

          <div class="btns">
            <button @click="deleteBooking(booking.id)" class="mealItem-delete">
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
import UserNav from "./UserNav.vue";

export default {
  name: "AllBookings",
  components: {
    UserNav,
  },
  data() {
    return {
      name: "",
      bookings: [],
    };
  },
  methods: {
    async deleteBooking(id) {
      let result = await axios.delete("http://localhost:3000/booking/" + id);

      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/booking");
      console.log(result);
      this.bookings = result.data;
    },
  },
  mounted() {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 92vh;
}
.all-blogs {
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
.blog {
  border: 1px solid #dbdfd0;
  margin: 25px;
  /* width: 22%;
  height: 100%; */
  width: 300px;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  /* background-color: rgb(46, 46, 42); */
  background-color: #ffffff;
}
.blog:hover {
  box-shadow: -1px 0px 15px 1px rgb(151, 140, 140);

  transition-duration: 0.5s;
}
.blog-date {
  font-size: 20px;
  color: #4e282b;
  text-align: left;
}
.blog-title {
  /* color: rgb(255, 255, 197); */
  color: #ad343e;
  width: 306px;
  height: 428px;
  font-size: 18px;
  /* border: 1px solid black; */
  width: 18rem;
  padding-left: 15px;
  text-align: left;
}
.blog-img {
  /* height: 15rem;
  width: 22rem; */
  height: 200px;
  width: 306px;
  border-radius: 10px 10px 0px 0px;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 30px; */
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
.blog-subject {
  font-size: 20px;
  color: #ad343e;
  text-align: left;
}
.blog-message {
  font-size: 25px;
  color: #ad343e;
  text-align: left;
}
.blog-phone {
  font-size: 20px;
  color: #ad343e;
  text-align: left;
}
.blog-email {
  font-size: 20px;
  color: #ad343e;
  text-align: left;
}
.mealItem-delete:hover {
  background-color: #ad343e;
  color: #ffffff;
}
</style>
