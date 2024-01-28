<template>
  <div>
    <UserNav />
    <div class="container">
      <div class="blog">
        <div class="blog-img">
          <img :src="blog.imageUrl" class="blog-img" alt="Meal Image" />
        </div>
        <div class="blog-date">{{ blog.date }}</div>
        <div class="blog-title">{{ blog.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserNav from "./UserNav.vue";
export default {
  name: "BlogItem",
  components: {
    UserNav,
  },
  data() {
    return {
      blog: {
        imageUrl: null,
        date: "",
        title: "",
      },
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/blogs/" + this.$route.params.id
    );
    this.blog = result.data;
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
  width: 100%;
  height: 90vh;
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
  width: 306px;
  height: 400px;
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
</style>
