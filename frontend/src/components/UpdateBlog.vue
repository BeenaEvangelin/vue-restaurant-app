<template>
  <div>
    <HeaderComponent />
    <div class="add-item">
      <h1 class="header">Update your Blog Post</h1>
      <div class="form">
        <label class="form-img-label">Image</label>
        <input
          type="file"
          v-show="false"
          ref="fileInput"
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

        <button type="button" class="form-btn" @click="updateBlog">
          Update Blog
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";

export default {
  name: "UpdateBlog",
  components: {
    HeaderComponent,
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
    async updateBlog() {
      let result = await axios.put(
        "http://localhost:3000/blogs/" + this.$route.params.id,

        {
          imageUrl: this.blog.imageUrl,
          date: this.blog.date,
          title: this.blog.title,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "AllBlogs" });
      }
    },
  },

  async mounted() {
    let admin = localStorage.getItem("admin-data");
    if (!admin) {
      this.$router.push({ name: "LogIn" });
    }
    let result = await axios.get(
      "http://localhost:3000/blogs/" + this.$route.params.id
    );
    this.blog = result.data;
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

.header {
  font-size: 3rem;
  margin-bottom: 20px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: left;
  text-align: left;
  flex-direction: column;
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
  /* padding-right: 20rem; */
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

.imagePreviewWrapper {
  width: 420px;
  height: 350px;
  display: block;
  cursor: pointer;
  border-radius: 10px;

  background-size: cover;
  background-position: center center;
}
.meal-icon {
  margin-right: 20px;
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
