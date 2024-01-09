<template>
  <div>
    <HeaderComponent />
    <div class="add-item">
      <h1 class="header">Add your meals here</h1>
      <div class="form">
        <label class="form-img-label">Image</label>
        <input type="file" @change="handleImageUpload" />
        <img :src="meal.imageUrl" class="imagePreviewWrapper" />

        <label class="form-label">Meal name</label>
        <input
          type="text"
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

        <button type="button" class="form-btn" @click="addItem">
          Add Meal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./Header.vue";

export default {
  name: "AddItem",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      meal: {
        imageUrl: null,
        itemName: "",
        amount: "Rs.",
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
        .post(
          "http://localhost:3000/menuItems",
          this.meal
          // {
          //   image: this.meal.image,
          //   itemName: this.meal.itemName,
          //   amount: this.meal.amount,
          // }
        )
        .then((result) => {
          console.log("Meal uploaded successfully:", result.data);
          this.$router.push({ name: "HomePage" });
        })
        .catch((error) => {
          console.error("Error uploading meal:", error);
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
.form-img-label {
  font-size: 25px;
  padding-right: 19rem;
}
.form-label-amt {
  font-size: 25px;
  padding-right: 18rem;
}
.form-btn {
  height: 3rem;
  width: 12rem;
  border-radius: 40px;
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
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  border: 1px solid rgb(83, 77, 77);
  background-size: cover;
  background-position: center center;
}
</style>
