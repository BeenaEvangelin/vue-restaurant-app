<template>
  <div>
    <HeaderComponent />

    <div class="add-item">
      <h1 class="header">Add your meals here</h1>
      <div class="form">
        <label class="form-img-label">Image</label>
        <input
          v-show="false"
          type="file"
          ref="fileInput"
          @change="handleImageUpload"
          class="form-input"
        />

        <img :src="meal.imageUrl" class="imagePreviewWrapper" />
        <button class="upload-btn" @click="$refs.fileInput.click()">
          <img :src="meal.upload" class="meal-icon" /> Upload
        </button>
        <label class="form-label">Meal name</label>
        <input
          type="text"
          :src="meal.upload"
          v-model="meal.itemName"
          placeholder="Enter meal item"
          class="form-input"
        />
        <label class="form-label-amt">Amount</label>
        <input
          type="text"
          v-model="meal.amount"
          placeholder="Enter amount"
          class="form-input"
        />
      </div>
      <button type="button" class="form-btn" @click="addItem">Add Meal</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";
import image from "../assets/default.jpg";
import uploadFile from "../assets/upload.svg";

export default {
  name: "AddItem",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      meal: {
        imageUrl: image,
        itemName: "",
        amount: "Rs.",
        upload: uploadFile,
      },
    };
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.meal.imageUrl = e.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    async addItem() {
      await axios
        .post("http://localhost:3000/menuItems", this.meal)
        .then((result) => {
          console.log("Meal uploaded successfully:", result.data);
          this.$router.push({ name: "HomePage" });
        })
        .catch((error) => {
          console.error("Error uploading meal:", error);
        });
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

.header {
  font-size: 45px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.form-input {
  height: 50px;
  width: 25rem;
  margin-bottom: 30px;
  border: 1px solid #474747;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
  background-color: white;
}
.form-label {
  font-size: 25px;
  /* padding-right: 16rem; */
}
.form-img-label {
  font-size: 25px;
  margin-bottom: 5px;
  /* padding-right: 19rem; */
}
.form-label-amt {
  font-size: 25px;
  /* padding-right: 18rem; */
}
.form-btn {
  height: 50px;
  width: 26rem;
  /* height: 4rem;
  width: 12rem; */
  border-radius: 10px;
  background-color: #474747;
  border: 1px solid #474747;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 20px;
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
.imagePreviewWrapper {
  width: 400px;
  height: 300px;
  display: block;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  /* background-color: white; */
}
.hide-file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.meal-icon {
  margin-right: 10px;
}
</style>
