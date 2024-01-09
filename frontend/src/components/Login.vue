<template>
  <div class="login">
    <div class="header">
      <h1>Hey Admin!</h1>
      <h1>Welcome to Nourish Bistro</h1>
      <img class="logo" src="../assets/restaurantLogo.png" />
    </div>
    <div class="form">
      <h1>Login here!</h1>

      <label class="form-label-email">Email</label>
      <input
        type="text"
        v-model="email"
        placeholder="Enter Email"
        class="form-input"
      />
      <label class="form-label">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        class="form-input"
      />
      <button class="form-btn" @click="login">Login</button>
      <router-link link to="/sign-up"
        ><button class="sign-in-btn">Sign Up</button></router-link
      >
    </div>
  </div>
  <!-- <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Option"
      type="checkbox"
    ></v-checkbox>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form> -->
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/admin?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("admin-data", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },

  mounted() {
    let admin = localStorage.getItem("admin-data");
    if (admin) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
<style scoped>
.login {
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
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
.header h1 {
  padding: 10px;
  /* color: #ad343e; */
}
.logo {
  width: 150px;
  height: 150px;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form-input {
  height: 50px;
  width: 25rem;
  margin-bottom: 30px;
  border: 1px solid #474747;
  border-radius: 40px;
  padding-left: 10px;
  font-size: 20px;
}
.form-label {
  font-size: 25px;
  padding-right: 16rem;
}
.form-label-email {
  font-size: 25px;
  padding-right: 19rem;
}
.form-btn {
  height: 3rem;
  width: 12rem;
  border-radius: 40px;
  font-size: 20px;
  background-color: #474747;
  border: 1px solid #474747;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.sign-in-btn {
  margin-top: 20px;
  font-size: 20px;
  height: 3rem;
  width: 12rem;
  border-radius: 40px;
  background-color: #ffffff;
  border: 1px solid #474747;
  color: #474747;
  cursor: pointer;
}
</style>
