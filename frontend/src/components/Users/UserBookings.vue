<template>
  <div>
    <UserNav />
    <div class="container">
      <h1 class="contact-heading">Book A Table</h1>
      <p class="contact-content">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div class="booking">
        <div class="form">
          <div class="form-name">
            <div class="form-enteries">
              <label class="form-label">Date</label>
              <input
                type="date"
                placeholder="Enter date"
                class="form-input"
                v-model="booking.date"
              />
            </div>
            <div class="form-enteries">
              <label class="form-label">Time</label>
              <input
                type="time"
                placeholder="Enter time"
                class="form-input"
                v-model="booking.time"
              />
            </div>
          </div>
          <label class="form-label">Phone</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            class="form-input"
            v-model="booking.phone"
          />
          <label class="form-label">Total Person</label>
          <input type="number" class="form-input" v-model="booking.person" />
          <button type="button" class="btn" @click="addBooking">Submit</button>
        </div>
        <router-link link to="/user-all-bookings" class="btnMessage">
          <button class="btnMessage">Your Bookings</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserNav from "./UserNav.vue";

export default {
  name: "UserBookings",
  components: {
    UserNav,
  },
  data() {
    return {
      booking: {
        date: "",
        time: "",
        phone: "",
        person: 0,
      },
    };
  },
  methods: {
    async addBooking() {
      await axios
        .post(
          "http://localhost:3000/booking",
          this.booking
          // {
          //   name: this.contact.name,
          //   email: this.contact.email,
          //   subject: this.contact.subject,
          //   message: this.contact.message,
          // }
        )
        .then((result) => {
          console.log("Booking made successfully:", result.data);
          this.$router.push({ name: "AllBookings" });
        })
        .catch((error) => {
          console.error("Error uploading message:", error);
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "LogIn" });
    }
  },
};
</script>
<style>
body {
  margin: 0;
}

.booking {
  height: 50vh;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  /* background-color: rgb(240, 238, 224); */
  justify-content: center;
  align-items: center;
}
.contact-heading {
  color: var(--Neutral-07, #2c2f24);
  text-align: center;

  /* Headline/H1 */
  font-family: Playfair Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 96px; /* 96% */
}
.contact-content {
  color: var(--Neutral-06, #495460);
  text-align: center;

  /* Body/18px/Regular */
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}
.form {
  /* border: 1px solid red; */
  height: 30vh;
  width: 700px;
  display: inline-flex;
  padding: 40px;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Neutral-01, #fff);

  /* 2 */
  box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
}
.form-name {
  display: flex;
  justify-content: space-between;
}
.form-label {
  color: var(--Neutral-07, #2c2f24);
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.form-enteries {
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-right: 4rem;
}
.form-input {
  display: flex;
  height: 60px;
  padding: 0px 24px;
  align-items: center;
  /* gap: 10px; */
  align-self: stretch;
  border-radius: 72px;
  border: 1px solid var(--Neutral-03, #dbdfd0);
  background: var(--Neutral-01, #fff);
  font-size: 20px;
}
.form-input-message {
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  font-size: 20px;
  height: 156px;
  padding: 24px;
  gap: 10px;
  text-align: left;
  border-radius: 16px;
  border: 1px solid var(--Neutral-03, #dbdfd0);
  background: var(--Neutral-01, #fff);
}
.btn {
  border-radius: 118px;
  background: #ad343e;
  border: 1px solid #ad343e;
  font-size: 20px;
  color: white;
  display: flex;
  padding: 20px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
.btnMessage {
  border-radius: 118px;
  background: #ad343e;
  border: 1px solid #ad343e;
  font-size: 20px;
  color: white;
  display: flex;
  /* padding: 20px 32px; */
  height: 3rem;
  width: 12rem;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-decoration: none;
}
</style>
