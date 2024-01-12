<template>
  <div>
    <UserNav />
    <h1>Your Messages</h1>
    <div class="container">
      <div class="all-blogs">
        <div v-for="contact in contacts" :key="contact.id" class="blog">
          <div class="blog-subject">{{ contact.subject }}</div>
          <div class="blog-message">{{ contact.message }}</div>
          <div class="blog-name">{{ contact.name }}</div>
          <div class="blog-email">{{ contact.email }}</div>

          <div class="btns">
            <button @click="deletecontact(contact.id)" class="mealItem-delete">
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
  name: "AllMessages",
  components: {
    UserNav,
  },
  data() {
    return {
      name: "",
      contacts: [],
    };
  },
  methods: {
    async deletecontact(id) {
      let result = await axios.delete("http://localhost:3000/contact/" + id);

      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/contact");
      console.log(result);
      this.contacts = result.data;
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
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  width: 350px;
  height: 450px;
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
  /* color: rgb(255, 255, 197); */
  color: #474747;
  font-size: 15px;
  padding: 1rem;
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
  height: 230px;
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
  color: #867778;
  text-align: left;
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
.mealItem-delete:hover {
  background-color: #ad343e;
  color: #ffffff;
}
</style>
