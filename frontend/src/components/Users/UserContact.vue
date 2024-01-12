<template>
  <div>
    <UserNav />
    <div class="contact">
      <div class="contact-heading">Contact Us</div>
      <p class="contact-content">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div class="form">
        <div class="form-name">
          <div class="form-enteries">
            <label class="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              class="form-input"
              v-model="contact.name"
            />
          </div>
          <div class="form-enteries">
            <label class="form-label">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              class="form-input"
              v-model="contact.email"
            />
          </div>
        </div>
        <label class="form-label">Subject</label>
        <input
          type="text"
          placeholder="Write a Subject"
          class="form-input"
          v-model="contact.subject"
        />
        <label class="form-label">Message</label>
        <textarea
          type="text"
          class="form-input-message"
          v-model="contact.message"
          placeholder="Write a Message"
        />
        <button type="button" class="btn" @click="addContact">Submit</button>
      </div>
      <router-link link to="/user-all-messages" class="btnMessage">
        <button class="btnMessage">Your Messages</button></router-link
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserNav from "./UserNav.vue";
export default {
  name: "UserContact",
  components: {
    UserNav,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async addContact() {
      await axios
        .post(
          "http://localhost:3000/contact",
          this.contact
          // {
          //   name: this.contact.name,
          //   email: this.contact.email,
          //   subject: this.contact.subject,
          //   message: this.contact.message,
          // }
        )
        .then((result) => {
          console.log("Message sent successfully:", result.data);
          this.$router.push({ name: "AllMessages" });
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
<style scoped>
.contact {
  height: 90vh;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 238, 224);
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
  height: 50vh;
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
