<template>
  <div>
    <HeaderComponent />
    <div class="update">
      <h1>Update the meals</h1>

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
        <label class="form-label-email">Amount</label>
        <input
          type="text"
          v-model="meal.amount"
          placeholder="Enter amount"
          class="form-input"
        />

        <button type="button" class="form-btn" @click="update">
          Update Meal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateItem",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      meal: {
        imageUrl: null,
        itemName: "",
        amount: "",
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
    async update() {
      let result = await axios.put(
        "http://localhost:3000/menuItems/" + this.$route.params.id,
        {
          imageUrl: this.meal.imageUrl,
          itemName: this.meal.itemName,
          amount: this.meal.amount,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },

  async mounted() {
    let admin = localStorage.getItem("admin-data");
    if (!admin) {
      this.$router.push({ name: "LogIn" });
    }
    // console.log(this.$route.params.id);
    let result = await axios.get(
      "http://localhost:3000/menuItems/" + this.$route.params.id
    );
    this.meal = result.data;
  },
};
</script>

<style scoped>
.update {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
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
  font-size: 20px;
}
.sign-in-btn {
  margin-top: 20px;
  font-size: 15px;
  height: 3rem;
  width: 12rem;
  border-radius: 40px;
  background-color: #ffffff;
  border: 1px solid #474747;
  color: #151d25;
  cursor: pointer;
}
.form-img-label {
  font-size: 25px;
  padding-right: 19rem;
}
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  /* display: block; */
  cursor: pointer;
  margin: 0 auto 30px;
  /* background-size: cover; */
  /* background-position: center center; */
}
</style>
