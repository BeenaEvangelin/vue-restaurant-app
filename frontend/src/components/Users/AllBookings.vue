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
  width: 300px;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

.btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mealItem-delete {
  height: 3rem;
  width: 8rem;
  border-radius: 10px;
  border: 1px solid #ad343e;
  margin: 10px;

  color: #ad343e;
  background-color: #ffffff;

  font-size: 18px;
  cursor: pointer;
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

.mealItem-delete:hover {
  background-color: #ad343e;
  color: #ffffff;
}
</style>
