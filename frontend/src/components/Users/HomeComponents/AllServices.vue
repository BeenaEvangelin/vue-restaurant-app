<template>
  <div class="container">
    <div class="services">
      <div class="title">We also offer unique services for your events</div>
      <div class="all-cards">
        <ul v-for="service in services" :key="service.id">
          <img :src="service.srcImg" class="img" />
          <h1 class="heading">{{ service.title }}</h1>
          <p class="content">{{ service.content }}</p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import services1 from "../../../assets/services1.png";
import services2 from "../../../assets/services2.png";
import services3 from "../../../assets/services3.png";
import services4 from "../../../assets/services4.png";
export default {
  name: "AllServices",

  data() {
    return {
      services: [
        {
          srcImg: services1,
          title: "Caterings",
          content:
            "In the new era of technology we look in the future with certainty for life.",
        },
        {
          srcImg: services2,
          title: "Birthdays",
          content:
            "In the new era of technology we look in the future with certainty for life.",
        },
        {
          srcImg: services3,
          title: "Weddings",
          content:
            "In the new era of technology we look in the future with certainty for life.",
        },
        {
          srcImg: services4,
          title: "Events",
          content:
            "In the new era of technology we look in the future with certainty for life.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.services {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.title {
  color: var(--Neutral-07, #2c2f24);
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 60.5px;
  width: 600px;
  text-align: left;
  margin-left: 3rem;
}
.all-cards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1400px;
  cursor: pointer;
}

.img {
  width: 300px;
  height: 300px;
  border-radius: 12px;
}
.heading {
  text-align: left;
  color: var(--Neutral-07, #2c2f24);
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  margin-left: 10px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.72px;
}
.content {
  color: var(--Neutral-06, #414536);
  text-align: left;
  margin-left: 10px;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
