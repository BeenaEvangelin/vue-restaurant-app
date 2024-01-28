<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <h1>Recent Customer views</h1>
      <div class="all-blogs">
        <div v-for="contact in contacts" :key="contact.id" class="blog">
          <div class="blog-subject">{{ contact.subject }}</div>
          <div class="blog-message">{{ contact.message }}</div>
          <div class="blog-name">{{ contact.name }}</div>
          <div class="blog-email">{{ contact.email }}</div>
          <!-- <div class="blog-date">{{ username }}</div>
          <div class="blog-date">{{ email }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";
export default {
  name: "MessagePage",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      contacts: [],
      username: "",
      email: "",
    };
  },
  methods: {
    async loadData() {
      let result = await axios.get("http://localhost:3000/contact");
      // console.log(result);
      this.contacts = result.data;

      let user = localStorage.getItem("user-data");

      if (!user) {
        console.log("user not found");
      } else {
        this.username = JSON.parse(user).username;
        this.email = JSON.parse(user).email;
      }
    },
  },
  async mounted() {
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
  background-image: url("../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  width: 350px;
  height: 450px;
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
  color: #474747;
  font-size: 15px;
  padding: 1rem;
  text-align: left;
}

.blog-subject {
  font-size: 20px;
  color: #ad343e;
  text-align: left;
}
.blog-message {
  font-size: 25px;
  color: #867778;
  text-align: left;
  height: 300px;
}
.blog-name {
  font-size: 20px;
  color: #867778;
  text-align: left;
}
.blog-email {
  font-size: 20px;
  color: #ad343e;
  text-align: left;
}
</style>
