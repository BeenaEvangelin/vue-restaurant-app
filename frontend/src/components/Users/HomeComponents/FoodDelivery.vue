<template>
  <div class="delivery">
    <div class="images">
      <div class="image1"><img src="../../../assets/del1.png" /></div>
      <div class="image2">
        <img src="../../../assets/del2.png" /><img
          src="../../../assets/del3.png"
        />
      </div>
    </div>
    <div class="content">
      <h1 class="title">Fastest Food Delivery in City</h1>
      <p class="sub-title">
        Our visual designer lets you quickly and of drag a down your way to
        customapps for both keep desktop.
      </p>
      <div>
        <p class="description">Delivery within 30 minutes</p>
        <p class="description">Best Offer and Prices</p>
        <p class="description">Online Services Available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodDelivery",
};
</script>
<style scoped>
.delivery {
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  background-color: #f9f9f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.images {
  height: 70vh;
  width: 800px;
  display: flex;
  /* border: 1px solid red; */
  margin-left: 7rem;
}
.image1 {
  width: 431px;
  height: 600px;
  flex-shrink: 0;
  border-radius: 12px;
}
.image2 {
  margin-top: 2rem;
}
.content {
  height: 50vh;
  width: 600px;
  /* border: 1px solid red; */
  margin-left: 2rem;
}
.title {
  color: var(--Neutral-07, #2c2f24);
  text-align: left;

  width: 400px;
  /* Headline/H2 */
  font-family: Playfair Display;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 60.5px; /* 110% */
}
.sub-title {
  color: var(--Neutral-06, #414536);

  text-align: left;
  width: 450px;
  /* Body/16px/Regular */
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.description {
  color: var(--Neutral-07, #2c2f24);
  text-align: left;
  /* Body/20px/Medium */
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 130% */
  margin-left: 5em;
}
</style>
