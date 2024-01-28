<template>
  <div>
    <div class="section">
      <img class="img" src="../../../assets/about1.png" />
      <div class="content">
        <h1 class="title">We provide healthy food for your family.</h1>
        <p class="paragraph">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p class="paragraph">
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <router-link link to="/user-about">
          <button class="btn">More About Us</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAbout",
};
</script>
<style scoped>
.section {
  background-color: #f8f8f0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.img {
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  border-radius: 10px;
}
.content {
  height: 457px;
  width: 557px;
}
.title {
  width: 557px;
  color: var(--Neutral-07, #2c2f24);

  font-family: Playfair Display;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 60.5px;
}
.paragraph {
  color: var(--Neutral-07, #2c2f24);
  text-align: left;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.btn {
  /* display: flex; */
  padding: 20px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 118px;
  border: 1.5px solid var(--Neutral-07, #2c2f24);
  background-color: #f8f8f0;
  font-size: 15px;
}
</style>
