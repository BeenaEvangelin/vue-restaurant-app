<template>
  <div>
    <HeaderComponent />
    <div class="add-item">
      <h1 class="header">Create your Blog Post</h1>
      <div class="form">
        <label class="form-img-label">Image</label>
        <input
          v-show="false"
          ref="fileInput"
          type="file"
          @change="handleImageUpload"
        />
        <img :src="blog.imageUrl" class="imagePreviewWrapper" />
        <button class="upload-btn" @click="$refs.fileInput.click()">
          <img src="/img/upload.197182e4.svg" class="meal-icon" /> Upload
        </button>
        <label for="date" class="form-label-date">Date</label>
        <input type="date" id="date" v-model="blog.date" class="form-input" />

        <label class="form-label-title">Title</label>
        <input
          type="text"
          v-model="blog.title"
          placeholder="Enter title"
          class="form-input"
        />

        <button type="button" class="form-btn" @click="addBlog">
          Add Blog
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";
import image from "../assets/default.jpg";

export default {
  name: "AddBlog",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      blog: {
        imageUrl: image,
        date: "",
        title: "",
      },
    };
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.blog.imageUrl = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    async addBlog() {
      await axios
        .post(
          "http://localhost:3000/blogs",
          this.blog
          // {
          //   image: this.meal.image,
          //   itemName: this.meal.itemName,
          //   amount: this.meal.amount,
          // }
        )
        .then((result) => {
          console.log("Blog uploaded successfully:", result.data);
          this.$router.push({ name: "AllBlogs" });
        })
        .catch((error) => {
          console.error("Error uploading blog:", error);
        });

      // if (result.status == 201) {
      //   this.$router.push({ name: "HomePage" });
      // }
    },
  },

  mounted() {
    let admin = localStorage.getItem("admin-data");
    if (!admin) {
      this.$router.push({ name: "LogIn" });
    }
  },
};
</script>
<style scoped>
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 92vh;
  background-image: url("../assets/profileImg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header {
  font-size: 3rem;
  margin-bottom: 20px;
}
.logo {
  width: 150px;
  height: 150px;
}
.sub-title {
  font-size: 30px;
  margin: 40px;
}
.form {
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  /* border: 1px solid black; */
  text-align: left;
}
.form-input {
  height: 50px;
  width: 25rem;
  margin-bottom: 30px;
  border: 1px solid #474747;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 20px;
}
.form-label-date {
  font-size: 25px;
  /* padding-right: 21rem; */
}
.form-img-label {
  font-size: 25px;
  margin-bottom: 5px;
}
.form-label-title {
  font-size: 25px;
  /* padding-right: 21rem; */
}
.form-btn {
  height: 3rem;
  width: 422px;
  border-radius: 10px;
  background-color: #474747;
  border: 1px solid #474747;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 20px;
}
.sign-in-btn {
  margin-top: 20px;
  font-size: 15px;
  height: 3rem;
  width: 12rem;
  border-radius: 40px;
  background-color: #ffffff;
  border: 1px solid #151d25;
  color: #151d25;
  cursor: pointer;
}
.imagePreviewWrapper {
  width: 420px;
  height: 350px;
  display: block;
  cursor: pointer;

  border: 1px solid rgb(83, 77, 77);
  background-size: cover;
  background-position: center center;
}
.meal-icon {
  margin-right: 10px;
}
.upload-btn {
  height: 55px;
  width: 10rem;
  margin-bottom: 30px;
  border: 1px solid #474747;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
  background-color: white;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
