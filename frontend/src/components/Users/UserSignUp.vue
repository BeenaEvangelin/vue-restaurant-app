<template>
  <div class="signup">
    <div class="header">
      <h1>Hey User!</h1>
      <h1>Welcome to Nourish Bistro</h1>
      <img class="logo" src="../../assets/restaurantLogo.png" />
    </div>
    <div class="form">
      <h1>Sign Up here!</h1>
      <label class="form-label">Username</label>
      <input
        type="text"
        v-model="username"
        placeholder="Enter Username"
        class="form-input"
      />
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
      <router-link link to="/">
        <button class="form-btn" @click="signUp">Sign Up</button></router-link
      >
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
export default {
  name: "UserSignUp",

  data() {
    return {
      v$: useValidate(),
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        v$: this.v$.$validate(),
        username: this.username,
        email: this.email,
        password: this.password,
      });

      console.log(result.data);
      // && result.status == 201
      if (!this.v$.$error) {
        localStorage.setItem("user-data", JSON.stringify(result.data));
        this.$router.push({ name: "UserHome" });
      } else {
        alert("Form failed validation");
      }
    },
  },
  validations() {
    return {
      username: { required },
      email: { required },
      password: { required },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if (user) {
      this.$router.push({ name: "UserHome" });
    }
  },
};
</script>
<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
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
  background-color: #474747;
  border: 1px solid #474747;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
