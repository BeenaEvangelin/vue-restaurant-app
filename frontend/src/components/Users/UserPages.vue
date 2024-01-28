<template>
  <div>
    <UserNav />
    <h1>Our Blog and Articles</h1>
    <p>
      We consider all the drivers of change gives you the components you need to
      change to create a truly happens.
    </p>
    <div class="container">
      <div class="all-blogs">
        <div v-for="blog in blogs" :key="blog.id" class="blog">
          <div class="blog-img">
            <img :src="blog.imageUrl" class="blog-img" alt="Meal Image" />
          </div>
          <div class="blog-date">{{ blog.date }}</div>
          <div class="blog-title">{{ blog.title }}</div>
          <router-link :to="`/user-pages/${blog.id}`">
            <button class="mealItem-update">View Post</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserNav from "./UserNav.vue";

export default {
  name: "UserPages",
  components: {
    UserNav,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async loadData() {
      let result = await axios.get("http://localhost:3000/blogs");
      this.blogs = result.data;
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
  width: 306px;
  height: 400px;
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
.blog-title {
  color: #ad343e;
  width: 306px;
  height: 428px;
  font-size: 18px;
  width: 18rem;
  padding-left: 15px;
  text-align: left;
}
.blog-img {
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
